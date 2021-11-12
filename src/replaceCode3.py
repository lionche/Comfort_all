# 只替换变量定义等号后的东西


import re
import os
from utils.utils import createFolder, readFileAll, readFileLine


def replaceLine(test_str_line_list, replaceLineDict):
    test_str_line_list_copy = test_str_line_list.copy()
    for old_value_statement_idx, new_value_statement in replaceLineDict.items():
        test_str_line_list_copy[old_value_statement_idx] = new_value_statement
    return test_str_line_list_copy


def IfvalueStatement(test_str_line_list):
    """
    正则匹配代码块,判断是否是赋值语句
    :param test_str_line_list: 代码源文件line_list
    :return:
    """
    regex = r'^ {4}var .* = .*;\n$'
    replaceLineDict = {}

    for old_value_statement_idx, line in enumerate(test_str_line_list):
        # matches = re.finditer(regex, line, re.MULTILINE)
        matches = re.search(regex, line, re.MULTILINE)
        if matches:
            # print(idx)
            old_value_statement = matches.group()
            value = old_value_statement.split('= ')[1].split(';')[0]
            new_value_statement = old_value_statement.replace(value, 'hah')
            replaceLineDict[old_value_statement_idx] = new_value_statement
    #如果替换了任何值
    if replaceLineDict:
        test_str_line_list_copy = replaceLine(test_str_line_list, replaceLineDict)
        code_string = ''
        for block in test_str_line_list_copy:
            code_string = code_string + block
        print(code_string)
        print("-" * 100)
    else: #没有替换值
        print("没有变量定义")
    # test_str_line_list_copy = replaceLine(test_str_line_list, replaceLineDict)





if __name__ == '__main__':
    # js要处理的文件夹
    # 应包含 orginal，gpt，replace三个文件夹
    # orginal是原js文件 ，gpt保存gpt续写出的代码，replace保存替换片段的代码

    Root = '../data/generated_data/original_samples/test_corpus_1000/no_hint'
    JSOrginalRoot = Root + '/orginal'
    JSReplaceRoot = Root + '/replaced'
    JSGptRoot = Root + '/gpt_no_repeat'

    for root, dirs, files in os.walk(JSOrginalRoot):
        files.sort(key=lambda x: int(x[:-3]), reverse=False)
        for file in files:
            gpt_file_path = os.path.join(root, file)
            print(gpt_file_path)
            code_line_list = readFileLine(gpt_file_path)
            IfvalueStatement(code_line_list)
            # if value_statement:
            #     print(value_statement)
            # print('-' * 100)
            # value_list = {}
            #     for item in block:
            #         value = item.split('= ')[1].split(';')[0]
            #         new_value_statement = item.replace(value,'hah')
            #         print(item)
            #         print(new_value_statement)
            #         value_list[item] = new_value_statement
            #         code_new = readFileAll(gpt_file_path).replace(item, new_value_statement)
            #     print(value_list)
            #     # print(code_new)
            #     print('-'*100)
            # print(gpt_file_path)
