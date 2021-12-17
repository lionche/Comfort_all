import logging
import pathlib
import subprocess
import tempfile
from typing import List

from src.studyMysql.Table_Operation import Table_Testcase
from workline.harness_tools.harness_class import HarnessResult, Output, Harness


class Testcase_Object(object):
    def __init__(self, Testcase_item):
        self.id = Testcase_item[0]
        self.Testcase_context = Testcase_item[1]
        self.SourceFun_id = Testcase_item[2]
        self.SourceTestcase_id = Testcase_item[3]
        self.Fuzzing_times = Testcase_item[4]
        self.Mutation_method = Testcase_item[5]
        self.Mutation_times = Testcase_item[6]
        self.Interesting_times = Testcase_item[7]
        self.Probability = Testcase_item[8]
        self.Remark = Testcase_item[9]

    def engine_run_testcase(self):
        harness = Harness()
        print(f'正在使用{len(harness.get_engines())}个引擎进行测试')
        harness_result = harness.run_testcase(self.id, self.Testcase_context)
        # 增加一次fuzzing次数
        self.Fuzzing_times += 1
        return harness_result
        # pass

    def add_interesting_times(self, interesting_number):
        self.Interesting_times += interesting_number

    def mutation_methon1(self):
        """
        操作符替换，变异方法1
        :return:
        """
        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_path = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            tmpfile.write(self.Testcase_context.encode())
            tmpfile.seek(0)
            tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            all_mutation_testcases_pass = self.Testcase_Mutation(temp_file_path)
            # print(len(result))
            # for item in result:
            #     print(item)
            #     print('-----------------------------------------------------')

        testcases_list_to_write = self.make_all_mutation_testcases_passListToWrite(all_mutation_testcases_pass, self.SourceFun_id,
                                                                                   self.id, 0, 1, 0, 0, 0, None)

        table_Testcase = Table_Testcase()

        table_Testcase.insertManyDataToTableTestcase(testcases_list_to_write)

        return all_mutation_testcases_pass

    def Testcase_Mutation(self, file_name):
        cmd = ['node', '/root/project/COMFORT/workline/mutator_testcase_tools/operator_replace.js', '-f', file_name]
        pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                               stderr=subprocess.PIPE, universal_newlines=True)
        stdout, stderr = pro.communicate()
        testcase = []
        result = stdout.split("------------------------------")
        for i in result:
            i = i.strip()
            if i != "":
                testcase.append(i)
        return testcase

    def make_all_mutation_testcases_passListToWrite(self, all_mutation_testcases_pass, SourceFun_id, SourceTestcase_id, Fuzzing_times,
                                                    Mutation_method, Mutation_times, Interesting_times, Probability,
                                                    Remark) -> list:
        # 将生成的代码写入数据库

        lis = []

        for testcase in all_mutation_testcases_pass:
            Testcases_content = testcase
            item = [Testcases_content, SourceFun_id, SourceTestcase_id, Fuzzing_times, Mutation_method,
                    Mutation_times, Interesting_times, Probability, Remark]
            lis.append(item)
        return lis

    pass
