# 只替换变量定义等号后的东西
# 整理一个替换的流程
import itertools
import re
import os
from random import choice

from utils import createFolder, readFileAll, readFileLine

from gpt_generator_var import function_generate

# print(os.getcwd())


def replaceLine(test_str_line_list, replaceLineDict):
    test_str_line_list_copy = test_str_line_list.copy()
    for old_value_statement_idx, new_value_statement in replaceLineDict.items():
        test_str_line_list_copy[old_value_statement_idx] = new_value_statement
    return test_str_line_list_copy


def ReplacevalueStatement(test_str_line_list, valset, var_number):
    """
    正则匹配代码块,替换value值
    :param test_str_line_list: 代码源文件line_list
    :param valset: 生成的变量的字典
    :param var_number: 变量的数量
    :return:
    """

    replaceLineDictList = []

    valsetList = list(valset)

    iterTimes = var_number

    iterPlan = set()

    for c in itertools.permutations(valsetList, iterTimes):
        iterPlan.add(c)

    for c in itertools.combinations_with_replacement(valsetList, iterTimes):
        iterPlan.add(c)

    for item in iterPlan:
        print(item)
        # 生成迭代器，
        item_iter = iter(item)

        regex = r'^ {4}var \S+ = \S+;\n'
        replaceLineDict = {}
        for old_value_statement_idx, line in enumerate(test_str_line_list):
            # matches = re.finditer(regex, line, re.MULTILINE)
            matches = re.search(regex, line, re.MULTILINE)
            if matches:
                old_value_statement = matches.group()
                # 获得下一个值:
                valset_Choice = next(item_iter)
                value = old_value_statement.split('= ')[1].split(';')[0]

                new_value_statement = old_value_statement.replace(value, valset_Choice)

                replaceLineDict[old_value_statement_idx] = new_value_statement

        replaceLineDictList.append(replaceLineDict)
        # print(replaceLineDictList)

    codeList = []
    if replaceLineDictList:
        for replaceLineDict in replaceLineDictList:
            print(replaceLineDict)
            test_str_line_list_copy = replaceLine(test_str_line_list, replaceLineDict)
            code_string = ''
            for block in test_str_line_list_copy:
                code_string = code_string + block
            codeList.append(code_string)
            # return code_string

    return codeList


def countVarNumber(test_str_line_list):
    """
    正则匹配代码块,替换value值
    :param test_str_line_list: 代码源文件line_list
    :return:
    """
    # regex = r'^ {4}var .* = .*;\n$'
    regex = r'^ {4}var \S+ = \S+;\n'

    count = 0

    for old_value_statement_idx, line in enumerate(test_str_line_list):
        # matches = re.finditer(regex, line, re.MULTILINE)
        matches = re.search(regex, line, re.MULTILINE)
        if matches:
            count = count + 1
    return count


def getVar(line):
    """
    正则匹配代码块,判断是否是赋值语句
    :param test_str_line_list: 代码源文件line_list
    :return:
    """
    # regex = r'^ {4}var .* = .*;$'
    regex = r'^ {4}var \S+ = \S+;'

    matches = re.search(regex, line, re.MULTILINE)
    if matches:
        # print(line)
        old_value_statement = matches.group()
        value = old_value_statement.split('= ')[1].split(';')[0]
        return value


def IfContainStatement(code_all):
    """
    判断代码块是否包含变量定义
    :param code_all: 全部代码
    :return:
    """
    # regex = r'^ {4}var .* = .*;\n$'
    regex = r'^ {4}var \S+ = \S+;\n'

    matches = re.search(regex, code_all, re.MULTILINE)
    return matches


def replaceVar(Root):
    JSOrginalRoot = Root + '/orginal'
    JSReplaceVarRoot = Root + '/replaced_var'
    count_contain_var = 0
    count_can_generate = 0
    count_cannot_generate = 0

    for root, dirs, files in os.walk(JSOrginalRoot):
        files.sort(key=lambda x: int(x[:-3]), reverse=False)
        for file in files:
            gpt_file_path = os.path.join(root, file)
            print(gpt_file_path)

            code_all = readFileAll(gpt_file_path)

            # 是否包含变量定义
            Ifmatch = IfContainStatement(code_all)
            if Ifmatch:
                print(code_all)
                print("包含变量定义")
                count_contain_var = count_contain_var + 1

                # 生成变量的值
                code_line_list = readFileLine(gpt_file_path)
                # print(code_line_list[0])
                # 使用function来作为生成的前缀
                all_functions = function_generate(code_line_list[0])
                # 包含所有相同前缀提取出来的值得set
                varSet = []
                for function in all_functions:
                    # print(function)
                    # print("-" * 100)
                    for line in function.splitlines():
                        value = getVar(line)
                        if value:
                            varSet.append(value)

                            if len(varSet) > 10:
                                varSet = varSet[:10]
                            # print(value)
                varSet = set(varSet)
                print(f'生成的变量定义{varSet}')
                print("-" * 100)
                if varSet:
                    count_can_generate = count_can_generate + 1
                    var_number = countVarNumber(code_line_list)

                    print(f"原用例定义了{var_number}个变量")

                    if var_number < 5:

                        code_list = ReplacevalueStatement(code_line_list, varSet, var_number)

                        js_number = file.split('.')[0]
                        replace_var_saved_dir = f'{JSReplaceVarRoot}/{js_number}_js'
                        # print(replace_saved_dir)
                        createFolder(replace_var_saved_dir)

                        for idx, testcase in enumerate(code_list, start=1):
                            print('替换之后')
                            print(testcase)
                            print("-" * 100)

                            with open(os.path.join(replace_var_saved_dir, f'{idx}.js'), 'w', encoding='utf-8') as f:
                                f.write(testcase)
                    else:
                        pass

                else:
                    print("没有生成变量定义")
                    count_cannot_generate = count_cannot_generate + 1

                    # 取出变量，存在set中

                # gpt_file_path,
            else:
                print("没有定义变量")
    print(f'包含变量定义的数量为:{count_contain_var},可以生成前缀{count_can_generate},不可以生成前缀{count_cannot_generate}')

# if __name__ == '__main__':
#     # js要处理的文件夹
#     # 应包含 orginal，gpt，replace三个文件夹
#     # orginal是原js文件 ，gpt保存gpt续写出的代码，replace保存替换片段的代码
#
#     Root = '../../data/generated_data/original_samples/test_corpus_10/no_hint'
#
#     replaceVar(Root)
