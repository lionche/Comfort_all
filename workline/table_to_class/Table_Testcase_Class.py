import subprocess
import sys
import tempfile

from src.studyMysql.Table_Operation import Table_Testcase, Table_Function
from workline.harness_tools.harness_class import Harness
from workline.table_to_class.Table_Function_Class import Function_Object
import re


class Testcase_Object(object):
    def __init__(self, Testcase_item):
        self.Id = Testcase_item[0]
        self.Testcase_context: str = Testcase_item[1]
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
        # print(f'正在使用{len(harness.get_engines())}个引擎进行测试')
        harness_result = harness.run_testcase(self.SourceFun_id, self.Id, self.Testcase_context)
        # 增加一次fuzzing次数
        self.Fuzzing_times += 1
        return harness_result
        # pass

    def add_interesting_times(self, interesting_number):
        self.Interesting_times += interesting_number

    def add_mutation_times(self, mutation_times):
        self.Mutation_times += mutation_times

    def jshint_check_testcases(self, all_testcases):
        """
        使用jshint对生成的用例进行检查\n
        过滤掉语法错误的用例\n
        保留正确的，再用于替换代码块变异\n
        去掉用例中最后一行的print
        :param all_functions: 所有方法的list
        :return:
        """
        print("正在对生成的用例使用jshint进行语法检查")
        all_testcases_pass = set()
        for testcase in all_testcases:
            # 通过with语句创建临时文件，with会自动关闭临时文件
            testcase_no_print = testcase[:testcase.rfind('\n')]
            # print(testcase_no_print)

            with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
                temp_file_path = tmpfile.name
                # print(temp_file_name)  # /tmp/tmp73zl8gmn
                tmpfile.write(testcase_no_print.encode())
                tmpfile.seek(0)
                result = self.cmd_jshint(temp_file_path)
                if result:
                    all_testcases_pass.add(testcase)

        return all_testcases_pass

    def cmd_jshint(self, temp_file_path):
        """
        使用jshint对生成的function进行检查\n
        :param temp_file_path: 临时文件位置
        :return: 语法正确返回true,语法错误返回false
        """
        # cmd = ['timeout', '60s', 'jshint', temp_file_path]
        cmd = ['timeout', '60s', 'jshint', '-c', '/root/Comfort_all/data/.jshintrc', temp_file_path]
        if sys.platform.startswith('win'):  # 假如是windows
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        else:  # 假如是linux
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = p.communicate()
        # if stdout:
        #     print(stdout)
        # if stderr:
        #     print("error")
        #     print(stderr)

        if stdout.__len__() > 0:
            jshint_flag = False
        else:  # 通过了检查，此时 test_file_name中就是美化后的代码
            jshint_flag = True
            # print(f"right!")
        return jshint_flag

    def mutation_method4(self):
        """
        操作符替换，变异方法4
        :return:
        """
        print("正在进行操作符替换")
        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_path = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            tmpfile.write(self.Testcase_context.encode())
            tmpfile.seek(0)
            # tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            all_mutation_testcases = self.Testcase_Mutatiod4(temp_file_path)
            # print(len(result))
            # for item in result:
            #     print(item)
            #     print('-----------------------------------------------------')

        all_mutation_testcases_pass = self.jshint_check_testcases(all_mutation_testcases)

        table_testcase = Table_Testcase()

        # 把通过语法检查的用例存入数据库
        testcases_list_to_write = self.make_all_mutation_testcases_passListToWrite(all_mutation_testcases_pass,
                                                                                   self.SourceFun_id,
                                                                                   self.Id, 0, 4, 0, 0, 0, None)

        table_testcase.insertManyDataToTableTestcase(testcases_list_to_write)

        return all_mutation_testcases_pass

    def Testcase_Mutatiod4(self, file_name):
        cmd = ['node', '/root/Comfort_all/workline/mutator_testcase_tools/operator_replace.js', '-f', file_name]
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

    def make_all_mutation_testcases_passListToWrite(self, all_mutation_testcases_pass, SourceFun_id, SourceTestcase_id,
                                                    Fuzzing_times,
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

    def get_function_content(self):
        """
        1.从testcase表中获取function id，
        2.然后根据id去function表中获取内容
        :return:
        """
        table_function = Table_Function()
        function = table_function.selectOneFromTableFunction(self.SourceFun_id)
        function_object = Function_Object(function)
        return function_object

    def mutation_method1_2(self, sess, if_save_function):
        """
        gpt直接续写
        :return:
        """
        function_object = self.get_function_content()
        all_functions_generated, all_functions_replaced_generated = function_object.gpt_mutation_1_2(sess,
                                                                                                     if_save_function)

        regex = r"function(.+\n)+}"
        # print(self.Testcase_context)
        all_functions_generated_testcases = set()
        all_functions_replaced_generated_testcases = set()

        for function in all_functions_generated:
            result = re.sub(regex, function, self.Testcase_context, 0, re.MULTILINE)
            all_functions_generated_testcases.add(result)

        for function in all_functions_replaced_generated:
            result = re.sub(regex, function, self.Testcase_context, 0, re.MULTILINE)
            all_functions_replaced_generated_testcases.add(result)

        all_functions_generated_testcases_pass = self.jshint_check_testcases(all_functions_generated_testcases)
        all_functions_replaced_generated_testcases_pass = self.jshint_check_testcases(
            all_functions_replaced_generated_testcases)
        table_testcase = Table_Testcase()

        # 把通过语法检查的用例存入数据库
        all_functions_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            all_functions_generated_testcases_pass,
            self.SourceFun_id,
            self.Id, 0, 1, 0, 0, 0, None)
        all_functions_replaced_generated_testcases_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            all_functions_replaced_generated_testcases_pass,
            self.SourceFun_id,
            self.Id, 0, 2, 0, 0, 0, None)

        table_testcase.insertManyDataToTableTestcase(all_functions_generated_testcases_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(all_functions_replaced_generated_testcases_pass_list_to_write)

        return all_functions_generated_testcases_pass, all_functions_replaced_generated_testcases_pass

    def updateFuzzingTimesInterestintTimes(self):
        table_Testcases = Table_Testcase()
        table_Testcases.updateFuzzingTimesInterestintTimes(self.Fuzzing_times,
                                                           self.Interesting_times, self.Id)
