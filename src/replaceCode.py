# 替换js文件代码

# 1.开始替换的行数，大于第一行，小于超过总行数

# path js文件的路径
# 截取的开始行数 startline
# 截取的结束行数 endline

# 获取gpt续写的片段
import os
import sys

import numpy as np


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

    js_file_num = JSCutGptPath.split('/')[5].split('_')[0]
    JSCutOriginalPath = f'../data/test_function/{js_file_num}.js'
    # print(JSCutOriginalPath)

    # js文件的行数
    js_file_len = getJSfileSize(JSCutOriginalPath)

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


# merge_js_cut(0,2,3,6)


# gpt续写前缀的行数

JSCutGptLinesRoot = f'../data/generated_data/original_samples/55_js_function'

# 行数最多为58
function_all_list = [[] for i in range(63)]


for root, dirs, files in os.walk(JSCutGptLinesRoot):
    for file in files:

        gpt_file_path = os.path.join(root, file)
        # print(gpt_file_path)
        js_file_num = gpt_file_path.split('/')[5].split('_')[0]
        file_js_lines_num = int(gpt_file_path.split('/')[6].split('_')[1])
        js_name = gpt_file_path.split('/')[7]

        replace_saved_dir = f'../data/generated_data/original_samples/replace/{js_file_num}_js/line_{file_js_lines_num}'

        if not os.path.exists(replace_saved_dir):
            os.makedirs(replace_saved_dir)

        function_all = merge_js_cut(gpt_file_path, file_js_lines_num + 1, file_js_lines_num + 3)

        with open(os.path.join(replace_saved_dir,js_name), 'w', encoding='utf-8') as f:
            f.write(function_all)

        # function_all_list[file_js_lines_num].append(function_all)

# print(function_all_list[62])


# for idx, lines_x in enumerate(function_all_list):
#
#     process = "\rprocessing: {current}/{total}".format(current=str(idx + 1), total=len(function_all_list))
#
#     # 可以刷新的打印
#     sys.stdout.write(process)
#
#     replace_saved_dir = f'../data/generated_data/original_samples/replace/line_{idx}'
#
#     # replace_complete_saved_dir = f'../data/generated_data/complete_testcases/replace/line_{idx}'
#
#     if not os.path.exists(replace_saved_dir):
#         os.makedirs(replace_saved_dir)
#
#     # print(idx)
#     for idx2, line_function in enumerate(lines_x, start=1):
#         with open(os.path.join(replace_saved_dir, f'{idx2}.js'), 'w', encoding='utf-8') as f:
#             f.write(line_function)
#
#         # testcase_assemble(line_function,replace_complete_saved_dir)




# for idx, function in enumerate(function_all_list, start=1):
#     print(function)


# print(function_all_list)

# line_1要从第二行开始截取
# function_cut_add = getJSCutGpt('../data/generated_data/original_samples/0_js/line_2/1.js', 3, 7)
# function_cut1, function_cut2 = getJSCutOriginal('../data/test_function/0.js', 3, 7)
