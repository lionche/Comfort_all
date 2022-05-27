# import os
# import sys
# from pathlib import Path
# BASE_DIR = str(Path(__file__).resolve().parent.parent.parent)
# sys.path.append(BASE_DIR)
import subprocess
import sys
import tempfile
from workline.harness_tools.harness_class import Harness
from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Function
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
        self.source_function_object = self.get_function_content()

    def engine_run_testcase(self, timeout="30"):
        harness = Harness()
        # print(f'正在使用{len(harness.get_engines())}个引擎进行测试')
        harness_result = harness.run_testcase(self.SourceFun_id, self.Id, self.Testcase_context, timeout)
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
        # print("正在对生成的用例使用jshint进行语法检查")
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
        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_path = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            tmpfile.write(self.Testcase_context.encode())
            tmpfile.seek(0)
            # tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            # 返回 随机代码块删除， While与If代码块互换， 条件代码块包裹， 操作符替换， 语义相近的API替换， 返回值相同的API替换， 原型链污染， 属性篡改， 热点函数优化
            random_block_remove, while_if_swap, condition_code_add, replaceOperator, replace_similar_API, replace_return_API, proto_pollution, property_modification, hotspot_optimization = self.design_Testcase_Mutation(
                temp_file_path)
            # print(len(result))
            # for item in result:
            #     print(item)
            #     print('-----------------------------------------------------')

        random_block_remove_pass = self.jshint_check_testcases(random_block_remove)
        while_if_swap_pass = self.jshint_check_testcases(while_if_swap)
        condition_code_add_pass = self.jshint_check_testcases(condition_code_add)
        replaceOperator_pass = self.jshint_check_testcases(replaceOperator)
        replace_similar_API_pass = self.jshint_check_testcases(replace_similar_API)
        replace_return_API_pass = self.jshint_check_testcases(replace_return_API)
        proto_pollution_pass = self.jshint_check_testcases(proto_pollution)
        property_modification_pass = self.jshint_check_testcases(property_modification)
        hotspot_optimization_pass = self.jshint_check_testcases(hotspot_optimization)

        table_testcase = Table_Testcase()

        # 把通过语法检查的用例存入数据库
        random_block_remove_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            random_block_remove_pass,
            self.SourceFun_id,
            self.Id, 0, 4, 0, 0, 0, None)
        while_if_swap_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(while_if_swap_pass,
                                                                                            self.SourceFun_id,
                                                                                            self.Id, 0, 5, 0, 0, 0,
                                                                                            None)
        condition_code_add_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            condition_code_add_pass,
            self.SourceFun_id,
            self.Id, 0, 6, 0, 0, 0, None)
        replaceOperator_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(replaceOperator_pass,
                                                                                              self.SourceFun_id,
                                                                                              self.Id, 0, 7, 0, 0, 0,
                                                                                              None)
        replace_similar_API_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            replace_similar_API_pass,
            self.SourceFun_id,
            self.Id, 0, 8, 0, 0, 0, None)
        replace_return_API_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            replace_return_API_pass,
            self.SourceFun_id,
            self.Id, 0, 9, 0, 0, 0, None)
        proto_pollution_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(proto_pollution_pass,
                                                                                              self.SourceFun_id,
                                                                                              self.Id, 0, 10, 0, 0, 0,
                                                                                              None)
        property_modification_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            property_modification_pass,
            self.SourceFun_id,
            self.Id, 0, 11, 0, 0, 0, None)
        hotspot_optimization_pass_list_to_write = self.make_all_mutation_testcases_passListToWrite(
            hotspot_optimization_pass,
            self.SourceFun_id,
            self.Id, 0, 12, 0, 0, 0, None)

        table_testcase.insertManyDataToTableTestcase(random_block_remove_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(while_if_swap_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(condition_code_add_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replaceOperator_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replace_similar_API_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(replace_return_API_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(proto_pollution_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(property_modification_pass_list_to_write)
        table_testcase.insertManyDataToTableTestcase(hotspot_optimization_pass_list_to_write)

        return random_block_remove_pass, while_if_swap_pass, condition_code_add_pass, replaceOperator_pass, replace_similar_API_pass, replace_return_API_pass, proto_pollution_pass, property_modification_pass, hotspot_optimization_pass

    def design_Testcase_Mutation(self, file_name):
        random_block_remove = []
        while_if_swap = []
        condition_code_add = []
        replaceOperator = []
        replace_similar_API = []
        replace_return_API = []
        proto_pollution = []
        property_modification = []
        hotspot_optimization = []
        cmd1 = ['node', '/root/Comfort_all/workline/mutator_testcase_tools/universal_mutation.js', '-f', file_name]
        pro1 = subprocess.Popen(cmd1, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE, universal_newlines=True)
        stdout1, stderr1 = pro1.communicate()
        print(stderr1)

        result1 = stdout1.split("------------------------------")
        for i in result1:
            i = i.strip()
            if (i != ""):
                split_i = i.split("\n")
                if split_i[-1] == "random_block_remove" and (i not in random_block_remove):
                    random_block_remove.append(i[:i.rfind('\n')])
                elif split_i[-1] == "while_if_swap" and (i not in while_if_swap):
                    while_if_swap.append(i[:i.rfind('\n')])
                elif split_i[-1] == "condition_code_add" and (i not in condition_code_add):
                    condition_code_add.append(i[:i.rfind('\n')])
                elif split_i[-1] == "replaceOperator" and (i not in replaceOperator):
                    replaceOperator.append(i[:i.rfind('\n')])
        cmd2 = ['node', '/root/Comfort_all/workline/mutator_testcase_tools/universal_mutation.js', '-f', file_name]
        pro2 = subprocess.Popen(cmd2, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                stderr=subprocess.PIPE, universal_newlines=True)
        stdout2, stderr2 = pro2.communicate()
        result2 = stdout2.split("------------------------------")
        for j in result2:
            j = j.strip()
            if (j != ""):
                split_j = j.split("\n")
                if split_j[-1] == "replace_similar_API" and (j not in replace_similar_API):
                    replace_similar_API.append(j[:j.rfind('\n')])
                elif split_j[-1] == "replace_return_API" and (j not in replace_return_API):
                    replace_return_API.append(j[:j.rfind('\n')])
                elif split_j[-1] == "proto_pollution" and (j not in proto_pollution):
                    proto_pollution.append(j[:j.rfind('\n')])
                elif split_j[-1] == "property_modification" and (j not in property_modification):
                    property_modification.append(j[:j.rfind('\n')])
                elif split_j[-1] == "hotspot_optimization" and (j not in hotspot_optimization):
                    hotspot_optimization.append(j[:j.rfind('\n')])
        # 返回 随机代码块删除， While与If代码块互换， 条件代码块包裹， 操作符替换， 语义相近的API替换， 返回值相同的API替换， 原型链污染， 属性篡改， 热点函数优化
        return random_block_remove, while_if_swap, condition_code_add, replaceOperator, replace_similar_API, replace_return_API, proto_pollution, property_modification, hotspot_optimization


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

    def mutation_method1_2(self, FunctionsSet, FunctionsReplaceBlockSet):
        """
        gpt直接续写
        :return:
        """

        regex = r"function(.+\n)+}"
        # print(self.Testcase_context)
        all_functions_generated_testcases = set()
        all_functions_replaced_generated_testcases = set()

        for function in FunctionsSet:
            result = re.sub(regex, function, self.Testcase_context, 0, re.MULTILINE)
            all_functions_generated_testcases.add(result)

        for function in FunctionsReplaceBlockSet:
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
