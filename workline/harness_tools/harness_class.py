import collections
import json
import math
import os
import tempfile
import logging
import pathlib
import subprocess
import gc
from threading import Thread
from typing import List

from workline.mysql_tools.Table_Operation import Table_Testbed, Table_Result, Table_Suspicious_Result
from src.utils import labdate

Majority = collections.namedtuple('Majority', [
    'majority_outcome', 'outcome_majority_size',
    'majority_stdout', 'stdout_majority_size'
])


class DifferentialTestResult:
    def __init__(self, function_id: int, testcase_id: int, error_type: str, testbed_id: int, testbed_location: str):
        self.function_id = function_id
        self.testcase_id = testcase_id
        self.error_type = error_type
        self.testbed_id = testbed_id
        self.testbed_location = testbed_location
        self.classify_result = None
        self.classify_id = None
        self.remark = None
        self.Is_filtered = 0

    def serialize(self):
        return {"Differential Test Result": {"testcase_id": self.testcase_id,
                                             "error_type": self.error_type,
                                             "testbed_id": self.testbed_id,
                                             # "function_id": self.function_id,
                                             # "inconsistent_testbed": self.testbed_location,
                                             # "classify_result": self.classify_result,
                                             # "classify_id": self.classify_id
                                             }}

    def __str__(self):
        return json.dumps(self.serialize(), indent=4)

    def save_to_table_suspicious_Result(self):
        """
        Save the result to the database
        :return:
        """
        table_suspicious_Result = Table_Suspicious_Result()
        table_suspicious_Result.insertDataToTableSuspiciousResult(self.error_type, self.testcase_id, self.function_id,
                                                                  self.testbed_id,
                                                                  self.remark, self.Is_filtered)


class HarnessResult:
    """
    This is the result type of the differential test, as opposed to ResultClass,
    which is the type that holds the results of the execution at runtime.
    """

    def __init__(self, function_id: int, testcase_id: int, testcase_context: str):
        self.function_id = function_id
        self.testcase_id = testcase_id
        self.testcase_context = testcase_context
        self.outputs: list[Output] = []
        self.seed_coverage = 0
        self.engine_coverage = None

    def __str__(self):
        return json.dumps({"Harness_Result": {"testcase_id": self.testcase_id,
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
        # print("majority_outputs: ",majority)

        testbed_num = len(self.outputs)

        bugs_info = []
        for output in self.outputs:
            if output.output_class == "crash":
                # print(f"{output.testbed_id}crash")
                bugs_info.append(
                    DifferentialTestResult(self.function_id, self.testcase_id, "crash", output.testbed_id,
                                           output.testbed_location))
                # pass
            elif majority.majority_outcome != output.output_class and majority.outcome_majority_size >= math.ceil(
                    ratio * testbed_num):
                if majority.majority_outcome == "pass":
                    bugs_info.append(
                        DifferentialTestResult(self.function_id, self.testcase_id, "Most JS engines pass",
                                               output.testbed_id,
                                               output.testbed_location))
                elif majority.majority_outcome == "timeout":
                    # Usually, this is not a bug
                    pass
                elif majority.majority_outcome == "crash":
                    bugs_info.append(
                        DifferentialTestResult(self.function_id, self.testcase_id, "Most JS engines crash",
                                               output.testbed_id,
                                               output.testbed_location))
                elif majority.majority_outcome == "script_error":
                    bugs_info.append(
                        DifferentialTestResult(self.function_id, self.testcase_id,
                                               "Majority JS engines throw runtime error/exception",
                                               output.testbed_id,
                                               output.testbed_location))
            elif output.output_class == "pass" and majority.majority_outcome == output.output_class and \
                    output.stdout != majority.majority_stdout and \
                    majority.stdout_majority_size >= math.ceil(ratio * majority.outcome_majority_size):
                if majority.outcome_majority_size >= math.ceil(ratio * testbed_num):
                    bugs_info.append(
                        DifferentialTestResult(self.function_id, self.testcase_id, "Pass value *** run error",
                                               output.testbed_id,
                                               output.testbed_location))
        return bugs_info

    def save_to_table_result(self):
        """
        Save the result to the database.
        :return:
        """

        # print(f'存入数据库内容：{self.engine_coverage}')
        table_result = Table_Result()
        for output in self.outputs:
            table_result.insertDataToTableResult(self.testcase_id, output.testbed_id, output.returncode, output.stdout,
                                                 output.stderr, output.duration_ms, self.seed_coverage,
                                                 self.engine_coverage,
                                                 None)


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
        # if self.returncode == -9 and self.duration_ms > 30 * 1000:
        if self.returncode == -9:
            return "timeout"
        elif self.returncode < 0 and self.returncode != -9:
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
    def __init__(self, testbed_location, testcase_path, testbed_id, timeout):
        super().__init__()
        self.testbed_id = testbed_id
        self.output = None
        self.testbed_location = testbed_location
        self.testcase_path = testcase_path
        self.returnInfo = None
        self.timeout = timeout
        self.coverage = None

    def run(self):
        try:
            self.output, self.coverage = self.run_test_case(self.testbed_location, self.testcase_path, self.testbed_id,
                                                            self.timeout)
        except BaseException as e:
            self.returnInfo = 1

    def del_useless_json_info(self, json_info):
        res = """"""
        import json
        # print(json_info)
        json_dict = json.loads(json_info)

        # -data
        #     -files:print(json_str['data'][0]['files']) （list）
        #         -expansions：没用
        #         -filename：
        #         -segments：没用
        #         -summary：
        #             -function：
        #                 -count
        #                 covered
        #                 percent;
        #             instantiations:
        #                 -count
        #                 covered
        #                 percent;
        #             lines:
        #                 -count
        #                 covered
        #                 percent;
        #             regions:
        #                 -count
        #                 covered
        #                 notcovered
        #                 percent;
        #     functions:print(json_str['data'][0]['functions'])
        #     totals:print(json_str['data'][0]['totals'])
        #             : functions: print(json_str['data'][0]['totals']['functions'])
        #             : instantiations :print(json_str['data'][0]['totals']['instantiations'])
        #             : lines:print(json_str['data'][0]['totals']['lines'])
        #             : regions:print(json_str['data'][0]['totals']['regions'])

        # -type
        # -version

        # print(json_dict)

        for item in ['type', 'version']:
            del json_dict[item]
        # del json_dict['type','version']

        # del json_dict['data'][0]['files'][0]['expansions']
        for item in json_dict['data'][0]['files']:
            for del_item in ['expansions', 'segments']:
                del item[del_item]
        del json_dict['data'][0]['functions']

        # print(json_dict['data'][0]['totals']['functions'])

        # small_json_info = json.dumps((json_dict))
        #
        # print(small_json_info)

        # cov_item = json_item['data'][0]
        # files_list = cov_item['files']
        #
        # for file in files_list:
        #     # print(file['filename'])
        #     res += file['filename']
        #     # print(file['summary'])
        #     for summary_detail in file['summary']:
        #         # print(summary_detail,file['summary'][summary_detail])
        #         res += file['summary'][summary_detail]
        # print('-'*100)

        # print('functions', cov_item['totals']['functions'])
        # print('instantiations', cov_item['totals']['instantiations'])
        # print('lines', cov_item['totals']['lines'])
        # print('regions', cov_item['totals']['regions'])

        return small_json_info

    def run_test_case(self, testbed_location: str, testcase_path: pathlib.Path, testbed_id, timeout):
        uniTag = testcase_path.name.split('javascriptTestcase_')[1].split('.')[0]
        cmd = ["timeout", "-s9", timeout]
        LLVM_PROFILE_FILE = f"{uniTag}.profraw"
        my_env = os.environ.copy()
        my_env['LLVM_PROFILE_FILE'] = LLVM_PROFILE_FILE

        for ob in testbed_location.split():
            cmd.append(ob)
        cmd.append(str(testcase_path))

        start_time = labdate.GetUtcMillisecondsNow()

        pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=False, env=my_env,
                               stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderr = pro.communicate()
        # print(stdout)

        end_time = labdate.GetUtcMillisecondsNow()
        duration_ms = int(round(
            (end_time - start_time).total_seconds() * 1000))
        event_start_epoch_ms = labdate.MillisecondsTimestamp(start_time)

        output = Output(testbed_id=testbed_id, testbed_location=testbed_location, returncode=pro.returncode,
                        stdout=stdout,
                        stderr=stderr,
                        duration_ms=duration_ms, event_start_epoch_ms=event_start_epoch_ms)
        coverage_stdout_finally = ''
        if 'cov' in testbed_location:
            cmd_coverage = f'llvm-profdata-10 merge -o {uniTag}.profdata {uniTag}.profraw && llvm-cov-10 export /root/.jsvu/engines/chakra-1.13-cov/ch -instr-profile={uniTag}.profdata && rm /root/Comfort_all/workline/{uniTag}.profdata /root/Comfort_all/workline/{uniTag}.profraw'
            pro1 = subprocess.Popen(cmd_coverage, stdin=subprocess.PIPE, stdout=subprocess.PIPE, shell=True,
                                    stderr=subprocess.PIPE, universal_newlines=True)
            stdout1, stderr1 = pro1.communicate()
            # print(stderr1)
            coverage_stdout_finally = self.del_useless_json_info(stdout1)

        return output, coverage_stdout_finally


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

    def run_testcase(self, function_id: int, testcase_id: int, testcase_context: str, timeout: str) -> HarnessResult:
        """
        Execute test cases with multiple engines and return test results after execution of all engines.
        :param timeout: timeout kill process
        :param function_id: executed function Id
        :param testcase_id:  executed Testcases Id
        :param testcase_context: Testcases to be executed
        :return: test results
        """
        result = HarnessResult(function_id=function_id, testcase_id=testcase_id, testcase_context=testcase_context)
        with tempfile.NamedTemporaryFile(prefix="javascriptTestcase_", suffix=".js", delete=True) as f:
            testcase_path = pathlib.Path(f.name)

            try:
                # 此处手动转换为bytes类型再存储是为了防止代码中有乱码而无法存储的情况
                testcase_path.write_bytes(bytes(testcase_context, encoding="utf-8"))
            except Exception as e:
                logging.exception("\nWrite to file failure: ", e)
                return result

            result.outputs, result.engine_coverage = self.multi_thread(testcase_path, timeout)
            # print(result.engine_coverage)

        return result

    def multi_thread(self, testcase_path: pathlib.Path, timeout: str):
        """
        Multithreading test execution test cases
        :param timeout: time to kill process
        :param testcase_path: path of the test case
        :return: execution results of all engines
        """
        outputs = []
        threads_pool = []
        coverage = ''
        uniTag = testcase_path.name.split('_')[1].split('.')[0]
        # print(uniTag)
        for engine in self.engines:
            testbed_id = engine[0]
            testbed_location = engine[1]
            tmp = ThreadLock(testbed_location=testbed_location, testcase_path=testcase_path, testbed_id=testbed_id,
                             timeout=timeout)
            threads_pool.append(tmp)
            tmp.start()
        for thread in threads_pool:
            thread.join()
            if thread.returnInfo:
                gc.collect()
            elif thread.output is not None:
                outputs.append(thread.output)
            if thread.coverage is not None:
                coverage = thread.coverage
            # print(thread.output)

        return outputs, coverage
