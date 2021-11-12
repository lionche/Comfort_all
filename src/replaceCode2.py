# 新版替换js文件代码,根据代码块来替换

# 1. 分析代码为代码块,前缀包括变量定义
# 2. 替换代码块
# 3. 替换完成后,把替换后的代码块写入文件

import re
import os
from utils.utils import createFolder, readFileAll


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




def RegularCutBlock(test_str):
    """
    正则匹配代码块
    :param test_str: 代码源文件
    :return:
    """
    block_list = []
    regex = r'(^ {4})([^} ].*)([^;]$)\n(.*\n)*? {4}}((\))?)(;?)$\n|^ {4}\w+.*;$\n|function.*\n|^}| {4}"use strict"\n;| {4}for.*{}\n'
    matches = re.finditer(regex, test_str, re.MULTILINE)
    for matchNum, match in enumerate(matches, start=1):
        block_list.append(match.group())

    return block_list


def getFilePath(path: str):
    """
    根据js续写的代码的文件夹路径，反向找到续写前的文件。
    :param path: js续写的代码的文件路径
    :return: orginal_path:续写前的原文件的路径
            gpt_path: 续写的地址
            orginal_js_number:原js文件编号
    """

    orginal_js_number = path.split('/')[-3].split('_')[0]
    gpt_js_number = path.split('/')[-3].split('_')[0]
    orginal_path = os.path.join(Root, 'orginal', orginal_js_number + '.js')
    gpt_path = path
    return orginal_path, gpt_path, orginal_js_number


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
    #gpt续写出来的js文件的文件名
    gpt_file_name = os.path.basename(gpt_file_path)
    # gpt前缀的行数，为1~gpt_line_num
    gpt_line_num = int(gpt_path.split('/')[-2].split('_')[1])
    # 续写的内容的第一行为 gpt_line_num+1
    # 从gpt_line_num+1行所在的代码块开始替换，替换的基本单位为代码块。
    block_num = fineBlockIdx(orginal_block_list, gpt_block_list, gpt_line_num + 1)
    # print(gpt_file_path)
    # print('续写的第一行的代码块位置：' + str(block_num))
    # print('原代码块数量：' + str(len(orginal_block_list)))
    # print('gpt续写代码块数量：' + str(len(gpt_block_list)))
    #当前块不是最后一个块的话
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

            # print('续写替换用例')
            # for block in orginal_block_list:
            #     print(block)
            #     print('-' * 100)


            replace_saved_dir = f'{JSReplaceRoot}/{js_number}_js/line_{gpt_line_num}'
            # print(replace_saved_dir)
            createFolder(replace_saved_dir)

            code_string = ''

            for block in orginal_block_list:
                code_string = code_string + block
            # print(code_string)
            #写入文件
            with open(os.path.join(replace_saved_dir, gpt_file_name), 'w', encoding='utf-8') as f:
                f.write(code_string)

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

    Root = '../data/generated_data/original_samples/test_corpus_1000/no_hint'
    JSReplaceRoot = Root + '/replaced'
    JSGptRoot = Root + '/gpt_no_repeat'

    for root, dirs, files in os.walk(JSGptRoot):
        for file in files:
            gpt_file_path = os.path.join(root, file)
            # print(gpt_file_path)

            replaceBlock(gpt_file_path)