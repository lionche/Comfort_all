# 新版替换js文件代码,根据代码块来替换

# 1. 分析代码为代码块
# 2. 替换代码块
# 3. 替换完成后,把替换后的代码块写入文件

import re
import os

# ^ {4}\w+.*;$ 单行
# (^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$|^ {4}\w+.*;$|function.*|^} 整体
# (^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$ 多行
from src.utils.utils import createFolder


def readFileAll(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    return code


def analysis_js_block(path):
    """
    将代码分为代码块，read代码，然后交给正则去匹配
    :param path:js文件位置
    :return:
    """

    code = readFileAll(path)
    block_list = RegularCutBlock(code)

    # for i in block_list:
    #     print(i)
    #     print('-' * 100)
    return block_list


def getJSCutGpt(path, startline, endline):
    with open(path, 'r') as f:
        lines_list = f.readlines()
        line_list_cut = lines_list[startline - 1:endline]
        function_cut = ''
        for i in line_list_cut:
            function_cut += i
        # print(function_cut)
        # print('--' * 50)
        return function_cut


# 获取原用例截取剩下的片段
def getJSCutOriginal(path, startline, endline):
    with open(path, 'r') as f:
        lines_list = f.readlines()
        line_list_cut1 = lines_list[:startline - 1]
        line_list_cut2 = lines_list[endline:]
        function_cut1 = ''
        function_cut2 = ''
        for i in line_list_cut1:
            function_cut1 += i
        for i in line_list_cut2:
            function_cut2 += i
        # print(function_cut1)
        # print('--' * 50)
        # print(function_cut2)
        # print('--' * 50)
        return function_cut1, function_cut2


# js_file_num
def merge_js_cut(JSCutGptPath, startline, endline):
    """

    :param js_file_num:  js文件的编号
    :param startline: 截取的开始行数，默认为lines_num+1
    :param endline: 截取结束的行数
    :return:
    """

    # print(JSCutOriginalPath)

    # js文件的行数
    # js_file_len = getJSfileSize(JSCutOriginalPath)

    # JSCutGptPath = f'../data/generated_data/original_samples/{js_file_num}_js/line_{lines_num}/1.js'
    function_cut_add = getJSCutGpt(JSCutGptPath, startline, endline)
    function_cut1, function_cut2 = getJSCutOriginal(JSCutOriginalPath, startline, endline)
    function_all = function_cut1 + function_cut_add + function_cut2
    # print(function_all)
    return function_all


# 获取js文件的长度
def getJSfileSize(path):
    with open(path, 'r') as f:
        lines_list = f.readlines()
    return len(lines_list)


def RegularCutBlock(test_str):
    """
    正则匹配代码块
    :param test_str: 代码源文件
    :return:
    """
    block_list = []
    # regex = r'(^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$|^ {4}\w+.*;$|function.*|^}| {4}"use strict";'
    regex = r'(^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$|^ {4}\w+.*;$|function.*|^}| {4}"use strict";| {4}for.*{}'
    matches = re.finditer(regex, test_str, re.MULTILINE)
    for matchNum, match in enumerate(matches, start=1):
        # print(match.group())
        # print('-'*100)
        block_list.append(match.group())

        # print("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum=matchNum, start=match.start(),
        #                                                                     end=match.end(), match=match.group()))

        # for groupNum in range(0, len(match.groups())):
        #     groupNum = groupNum + 1
        #
        #     print("Group {groupNum} found at {start}-{end}: {group}".format(groupNum=groupNum,
        #                                                                     start=match.start(groupNum),
        #                                                                     end=match.end(groupNum),
        #                                                                     group=match.group(groupNum)))

    return block_list


def getFilePath(path: str):
    """
    根据js续写的代码的文件夹路径，反向找到续写前的文件。
    :param path: js续写的代码的文件路径
    :return: orginal_path:续写前的原文件的路径
            gpt_path: 续写的地址
            js_number:js文件编号
    """

    js_number = path.split('/')[-3].split('_')[0]
    orginal_path = os.path.join(Root, 'orginal', js_number + '.js')
    gpt_path = path
    return orginal_path, gpt_path, js_number


def fineBlockIdx(orginal_block_list, gpt_block_list, gpt_line_num):
    """替换代码块
    :param orginal_block_list: 原文件的代码块
    :param gpt_block_list: gpt生成文件的代码块
    :param gpt_line_num: gpt开始续写的第一行代码
    :return:当前代码块
    """

    block_count = 0
    line_count = 0

    for idx, block in enumerate(gpt_block_list):
        line_count = len(block.splitlines()) + line_count

        # print(block, line_count)

        if gpt_line_num <= line_count:
            block_count = idx
            break
    # print(gpt_line_num)
    # print(block_count + 1)
    # print(orginal_block_list[block_count])
    # print(gpt_block_list[block_count])

    return block_count + 1


def replaceBlock(gpt_file_path):
    orginal_path, gpt_path, js_number = getFilePath(gpt_file_path)
    orginal_block_list = analysis_js_block(orginal_path)
    gpt_block_list = analysis_js_block(gpt_path)
    # gpt前缀的行数，为1~gpt_line_num
    gpt_line_num = int(gpt_path.split('/')[-2].split('_')[1])
    # 续写的内容的第一行为 gpt_line_num+1
    # 从gpt_line_num+1行所在的代码块开始替换，替换的基本单位为代码块。
    block_num = fineBlockIdx(orginal_block_list, gpt_block_list, gpt_line_num + 1)
    # print(gpt_file_path)
    # print('续写的第一行的代码块位置：' + str(block_num))
    # print('原代码块数量：' + str(len(orginal_block_list)))
    # print('gpt续写代码块数量：' + str(len(gpt_block_list)))
    if block_num != len(gpt_block_list):

        # print('原用例')
        # for block in orginal_block_list:
        #     print(block)
        #     print('-'*100)
        #
        # print('gpt续写用例')
        # for block in gpt_block_list:
        #     print(block)
        #     print('-'*100)

        # 使用当前代码块替换掉对应的代码块
        try:
            orginal_block_list[block_num - 1] = gpt_block_list[block_num - 1]
            replace_saved_dir = f'{JSReplaceRoot}/{js_number}_js/line_{gpt_line_num}'
            # print(replace_saved_dir)
            createFolder(replace_saved_dir)

            code_string = ''

            for block in orginal_block_list:
                print(block)
                print('-'*100)

            print(orginal_block_list)
            # for block in orginal_block_list:
            #     code_string = code_string + block
            #     print(orginal_block_list)
            # print(code_string)

        except:
            pass

        #
        # if not os.path.exists(replace_saved_dir):
        #     os.makedirs(replace_saved_dir)
        #
        # JSCutOriginalPath = f'{JSOrginalsRoot}/{js_file_num}.js'
        #
        # function_all = merge_js_cut(gpt_file_path, file_js_lines_num + 1, file_js_lines_num + 3)
        #
        # with open(os.path.join(replace_saved_dir, js_name), 'w', encoding='utf-8') as f:
        #     f.write(function_all)

        # print('替换后的用例')
        # for block in orginal_block_list:
        #     print(block)
        #     print('-'*100)
    else:
        # 如果是最后一个代码块，就不替换
        # print('不会替换最后一个}')
        pass


if __name__ == '__main__':
    # js要处理的文件夹
    # 应包含 orginal，gpt，replace三个文件夹
    # orginal是原js文件 ，gpt保存gpt续写出的代码，replace保存替换片段的代码

    Root = '../data/generated_data/original_samples/test_corpus_100/no_hint'
    JSReplaceRoot = Root + '/replaced'
    JSGptRoot = Root + '/gpt_no_repeat'

    for root, dirs, files in os.walk(JSGptRoot):
        for file in files:
            gpt_file_path = os.path.join(root, file)
            # print(gpt_file_path)

            replaceBlock(gpt_file_path)
    #
    # JSworkfolderPath = '../data/generated_data/original_samples/test_corpus_100/'
    #
    # JSGptRoot = JSworkfolderPath + 'gpt_no_repeat'
    #
    # JSOrginalsRoot = JSworkfolderPath + 'orginal'
    #
    # JSReplaceRoot =  JSworkfolderPath + 'replaced'
    #
    #
    # for root, dirs, files in os.walk(JSGptRoot):
    #     for file in files:
    #         gpt_file_path = os.path.join(root, file)
    #         # print(gpt_file_path)
    #
    #         #js源文件文件编号
    #         js_file_num = gpt_file_path.split('/')[-3].split('_')[0]
    #         # print(js_file_num)
    #
    #         #js行数编号
    #         file_js_lines_num = int(gpt_file_path.split('/')[-2].split('_')[1])
    #         # print(file_js_lines_num)
    #
    #         #续写出的js文件编号
    #         js_name = gpt_file_path.split('/')[-1]
    #         # print(js_name)
    #
    #         replace_saved_dir = f'{JSReplaceRoot}/{js_file_num}_js/line_{file_js_lines_num}'
    #
    #         if not os.path.exists(replace_saved_dir):
    #             os.makedirs(replace_saved_dir)
    #
    #         JSCutOriginalPath = f'{JSOrginalsRoot}/{js_file_num}.js'
    #
    #         function_all = merge_js_cut(gpt_file_path, file_js_lines_num + 1, file_js_lines_num + 3)
    #
    #         with open(os.path.join(replace_saved_dir, js_name), 'w', encoding='utf-8') as f:
    #             f.write(function_all)
