# 从Table_Function读取方法，使用gpt变异，再写入Table_Function
import math
import os
import re
import time

from src.studyMysql.Table_Operation import Table_Function
import tensorflow as tf
tf.get_logger().setLevel('ERROR')
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"

import gpt_2_simple as gpt2


def IfContainStatement(Function_Content):
    """
    判断代码块是否包含变量定义
    :param code_all: 全部代码
    :return 包含返回True，不包含返回False
    """
    regex = r'^ {4}var \S+ = \S+;\n'

    matches = re.search(regex, Function_Content, re.MULTILINE)
    return matches


class Function_Object(object):

    def __init__(self, function_object):
        self.Id = function_object[0]
        self.Function_Content = function_object[1]
        self.SourceFun_Id = function_object[2]
        self.Mutation_Method = function_object[3]
        self.Remark = function_object[4]
        self.js_line_count = self.getJSfileSize(self.Function_Content)
        self.var_line_count = self.count_var_lines(self.Function_Content)
        self.all_functions = []
        self.function_prefix = None

    def __str__(self):
        return str(self.var_line_count)

    def count_var_lines(self, code: str):
        """
        数一数包含var的最后一行是第几行
        :param file_path: 文件的地址
        :return: 最后一个var的行数,也就是前缀的行数
        """

        regex = r'function.*\n( {4}"use strict";\n)?( {4}var.*\n)*'

        matches = re.finditer(regex, code, re.MULTILINE)

        count = 0
        for matchNum, match in enumerate(matches, start=1):
            # print(match.group(0))

            for line in match.group(0).splitlines():
                count = count + 1
        return count

    def getJSfileSize(self, code: str):
        lines_list = code.splitlines()
        return len(lines_list)

    def gpt_mutation_1(self):
        # 从保留变量定义的第一行到结尾，依次获取前缀
        for cut_line in range(self.var_line_count, self.js_line_count):
            start_time = time.time()
            # 获取到了前缀
            self.function_prefix = self.getPrefix(self.Function_Content, cut_line)

            try:
                generated_functions = self.function_generate(self.function_prefix)
            except:
                # 前缀过长，出错，跳到下一个用例
                print('wrong.so skip')
                continue
                # pass
            end_time = time.time()
            print(
                f"A total of {len(generated_functions)} testcases were generated, taking {int(end_time - start_time)} seconds.")

    def function_generate(self, function_prefix):

        generate_prefix = generate_prefix_top2000 + function_prefix

        # generate_prefix = hparams.generate_prefix
        print(function_prefix, "\n-------------------------------")

        nsamples = 16
        batch_size = 8
        batches = int(math.ceil(nsamples / batch_size))

        for idx in range(batches):
            try:
                texts = gpt2.generate(sess,
                                      model_dir=generate_model_dir,
                                      model_name=generate_model_name,
                                      nsamples=batch_size,
                                      batch_size=batch_size,
                                      prefix=generate_prefix,
                                      top_p=0,
                                      top_k=0,
                                      temperature=0.5,
                                      include_prefix=True,
                                      return_as_list=True,
                                      length=512
                                      )
                for text in texts:

                    # 用前缀分割用例，[1:]去除第一个分割的空白
                    functions = text.split(generate_prefix_top2000)[1:]

                    # 如果生成多个方法，只取第一个符合前缀的方法
                    # print(len(functions))

                    if len(functions) > 1:
                        # print(functions[0])
                        # print("-" * 10)
                        self.all_functions.append(functions[0])
            except:
                continue

        return self.all_functions


    def getPrefix(self, code: str, cut_line: int):
        lines_list = code.splitlines(True)
        line_list_cut = lines_list[0:cut_line]
        function_cut = ''
        for i in line_list_cut:
            function_cut += i
        # print(function_cut)
        # print('--')
        return function_cut


# def choiceMutationMethod(item):
#     """
#     根据Function_Content来选择变异的方法\n
#     方法一：gpt代码续写\n
#     方法二：gpt代码块替换\n
#     方法三：gpt变量替换\n
#     包含变量定义，使用方法一二三\n
#     不包含变量定义，使用方法一二\n
#     :param item: 从表中导出的一条数据
#     :return:
#     """
#     # Id = item[0]
#     # Function_Content = item[1]
#     # SourceFun_Id = item[2]
#     # Mutation_Method = item[3]
#     # Remark = item[4]
#     print(Id, Function_Content, SourceFun_Id, Mutation_Method, Remark)
#     # print(Function_Content[0])
#
#     Ifmatch = IfContainStatement(Function_Content)
#
#     if Ifmatch:
#         print('包含变量定义')
#         count = count_var_lines(Function_Content)
#         # print(count)
#
#         GPT_Mutation(count, Function_Content)
#
#     else:
#         print('不包含变量定义')


if __name__ == '__main__':

    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    generate_model_dir = '/root/project/COMFORT/src/generate_model/models'
    generate_model_name = 'nisl_model'
    generate_prefix_top2000 = "//JavascriptTop2000Functions\n"

    # gpt2.load_gpt2(sess,
    #                model_dir=generate_model_dir,
    #                model_name=generate_model_name,
    #                multi_gpu=True)

    table_Function = Table_Function()
    lis = table_Function.selectAllFromTableFunction()
    # 从表中读取了 Id, Function_Content, SourceFun_Id, Mutation_Method, Remark
    for item in lis:
        function_object = Function_Object(item)
        function_object.gpt_mutation_1()
