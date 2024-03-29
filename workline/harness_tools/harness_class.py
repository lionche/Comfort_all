import collections
import json
import math
import tempfile
import logging
import pathlib
import subprocess
import gc
import traceback
import sys
from enum import Enum
from multiprocessing import Pool
from threading import Thread
from typing import List

from src.studyMysql.Table_Operation import Table_Testbed
from src.utils import labdate

Majority = collections.namedtuple('Majority', [
    'majority_outcome', 'outcome_majority_size',
    'majority_stdout', 'stdout_majority_size'
])


class DifferentialTestResult:
    def __init__(self, testcase_id: int, bug_type: str, testbed_id: int, testbed_location: str):
        self.testcase_id = testcase_id
        self.bug_type = bug_type
        self.testbed_id = testbed_id
        self.testbed_location = testbed_location
        self.classify_result = None
        self.classify_id = None

    def serialize(self):
        return {"Differential Test Result": {"testcase_id": self.testcase_id,
                                             "error_type": self.bug_type,
                                             "testbed_id": self.testbed_id,
                                             "inconsistent_testbed": self.testbed_location,
                                             "classify_result": self.classify_result,
                                             "classify_id": self.classify_id
                                             }}

    def __str__(self):
        return json.dumps(self.serialize(), indent=4)


class HarnessResult:
    """
    This is the result type of the differential test, as opposed to ResultClass,
    which is the type that holds the results of the execution at runtime.
    """

    def __init__(self, testcase_id: int, testcase_context: str):
        self.testcase_id = testcase_id
        self.testcase_context = testcase_context
        self.outputs = []

    def __str__(self):
        return json.dumps({"Harness Result": {"testcase_id": self.testcase_id,
                                              "testcase_context": self.testcase_context,
                                              "outputs": [e.serialize() for e in self.outputs]
                                              }
                           }, indent=4)

    def get_majority_output(self) -> Majority:
        """Majority vote on testcase outcomes and outputs."""
        # print(result)

        majority_outcome, outcome_majority_size = collections.Counter([
            output.output_class for output in self.outputs
        ]).most_common(1)[0]
        majority_stdout, stdout_majority_size = collections.Counter([
            output.stdout for output in self.outputs
        ]).most_common(1)[0]
        return Majority(majority_outcome, outcome_majority_size,
                        majority_stdout, stdout_majority_size)

    def differential_test(self) -> List[DifferentialTestResult]:
        if self.outputs is None:
            return []
        ratio = 2 / 3
        majority = self.get_majority_output()
        # print(majority)
        testbed_num = len(self.outputs)
        # print(testbed_num)

        bugs_info = []
        for output in self.outputs:
            if output.output_class == "crash":
                bugs_info.append(
                    DifferentialTestResult(self.testcase_id, "crash", output.testbed_id, output.testbed_location))
                pass
            elif majority.majority_outcome != output.output_class and majority.outcome_majority_size >= math.ceil(
                    ratio * testbed_num):
                if majority.majority_outcome == "pass":
                    bugs_info.append(
                        DifferentialTestResult(self.testcase_id, "Most JS engines pass", output.testbed_id,
                                               output.testbed_location))
                elif majority.majority_outcome == "timeout":
                    # Usually, this is not a bug
                    pass
                elif majority.majority_outcome == "crash":
                    bugs_info.append(
                        DifferentialTestResult(self.testcase_id, "Most JS engines crash", output.testbed_id,
                                               output.testbed_location))
                elif majority.majority_outcome == "script_error":
                    bugs_info.append(
                        DifferentialTestResult(self.testcase_id, "Majority JS engines throw runtime error/exception",
                                               output.testbed_id,
                                               output.testbed_location))
            elif output.output_class == "pass" and majority.majority_outcome == output.output_class and \
                    output.stdout != majority.majority_stdout and \
                    majority.stdout_majority_size >= math.ceil(ratio * majority.outcome_majority_size):
                if majority.outcome_majority_size >= math.ceil(ratio * testbed_num):
                    bugs_info.append(
                        DifferentialTestResult(self.testcase_id, "Pass value *** run error", output.testbed_id,
                                               output.testbed_location))
        return bugs_info


class Output:
    def __init__(self,
                 testbed_id: int,
                 testbed_location: str,
                 returncode: int,
                 stdout: str,
                 stderr: str,
                 duration_ms: int,
                 event_start_epoch_ms: int):
        self.testbed_id = testbed_id
        self.testbed_location = testbed_location
        self.returncode = returncode
        self.stdout = stdout
        self.stderr = stderr
        self.duration_ms = duration_ms
        self.event_start_epoch_ms = event_start_epoch_ms
        self.output_class = self.get_output_class()

    def get_output_class(self) -> str:
        """
        The order in which branches are judged cannot be reversed，
        because Whether the test case has a syntax error or not, chakraCore's returnCode is equal to 0
        """
        if self.returncode == -9 and self.duration_ms > 60 * 1000:
            return "timeout"
        elif self.returncode < 0:
            return "crash"
        elif self.returncode > 0 or not self.stderr == "":
            return "script_error"
        else:
            return "pass"

    def serialize(self):
        return {"testbed_id": self.testbed_id,
                "testbed_location": self.testbed_location,
                "returncode": self.returncode,
                "stdout": self.stdout,
                "stderr": self.stderr,
                "duration_ms": self.duration_ms,
                "event_start_epoch_ms": self.event_start_epoch_ms
                }

    def __str__(self):
        return json.dumps({"testbed_id": self.testbed_id,
                           "testbed_location": self.testbed_location,
                           "returncode": self.returncode,
                           "stdout": self.stdout,
                           "stderr": self.stderr,
                           "duration_ms": self.duration_ms,
                           "event_start_epoch_ms": self.event_start_epoch_ms},
                          indent=4)


class ThreadLock(Thread):
    def __init__(self, testbed_location, testcase_path, testbed_id):
        super().__init__()
        self.testbed_id = testbed_id
        self.output = None
        self.testbed_location = testbed_location
        self.testcase_path = testcase_path
        self.returnInfo = None

    def run(self):
        try:
            self.output = self.run_test_case(self.testbed_location, self.testcase_path, self.testbed_id)
        except BaseException as e:
            self.returnInfo = 1

    def run_test_case(self, testbed_location: str, testcase_path: pathlib.Path, testbed_id, time: str = "60"):
        cmd = ["timeout", "-s9", time]
        for ob in testbed_location.split():
            cmd.append(ob)
        cmd.append(str(testcase_path))

        start_time = labdate.GetUtcMillisecondsNow()
        pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE, universal_newlines=True)
        # print(cmd)
        stdout, stderr = pro.communicate()
        end_time = labdate.GetUtcMillisecondsNow()
        duration_ms = int(round(
            (end_time - start_time).total_seconds() * 1000))
        event_start_epoch_ms = labdate.MillisecondsTimestamp(start_time)
        output = Output(testbed_id=testbed_id, testbed_location=testbed_location, returncode=pro.returncode,
                        stdout=stdout,
                        stderr=stderr,
                        duration_ms=duration_ms, event_start_epoch_ms=event_start_epoch_ms)
        return output


class Harness:

    @staticmethod
    def get_engines():
        table_testbed = Table_Testbed()
        testbed_list = table_testbed.selectAllIdAndLocateFromTableTestbed()
        return testbed_list

    def __init__(self):
        """
        initialize harness
        :param engines: engines to be test
        """
        self.engines = self.get_engines()



    def run_testcase(self, testcase_id: int, testcase_context: str) -> HarnessResult:
        """
        Execute test cases with multiple engines and return test results after execution of all engines.
        :param testcase_id:  executed Testcases Id
        :param testcase_context: Testcases to be executed
        :return: test results
        """
        result = HarnessResult(testcase_id=testcase_id, testcase_context=testcase_context)
        with tempfile.NamedTemporaryFile(prefix="javascriptTestcase_", suffix=".js", delete=True) as f:
            testcase_path = pathlib.Path(f.name)

            try:
                # 此处手动转换为bytes类型再存储是为了防止代码中有乱码而无法存储的情况
                testcase_path.write_bytes(bytes(testcase_context, encoding="utf-8"))
            except Exception as e:
                logging.exception("\nWrite to file failure: ", e)
                return result

            result.outputs = self.multi_thread(testcase_path)

        return result

    def multi_thread(self, testcase_path: pathlib.Path) -> List[Output]:
        """
        Multithreading test execution test cases
        :param testcase_path: path of the test case
        :return: execution results of all engines
        """
        outputs = []
        threads_pool = []
        for engine in self.engines:
            testbed_id = engine[0]
            testbed_location = engine[1]
            tmp = ThreadLock(testbed_location=testbed_location, testcase_path=testcase_path, testbed_id=testbed_id)
            threads_pool.append(tmp)
            tmp.start()
        for thread in threads_pool:
            thread.join()
            if thread.returnInfo:
                gc.collect()
            elif thread.output is not None:
                outputs.append(thread.output)
        return outputs
