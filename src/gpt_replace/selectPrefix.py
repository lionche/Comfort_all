# 从文件中选择前缀
import re

# path js文件的路径
# lines_num截取前几行
from utils import readFileAll


def getJSfile(path, lines_num):
    with open(path, 'r') as f:
        lines_list = f.readlines()
        line_list_cut = lines_list[0:lines_num]
        function_cut = ''
        for i in line_list_cut:
            function_cut += i
        # print(function_cut)
        # print('--')
        return function_cut


# 获取js文件的长度
def getJSfileSize(path):
    with open(path, 'r') as f:
        lines_list = f.readlines()
    return len(lines_list)


def count_var_lines(file_path):
    """
    数一数包含var的最后一行是第几行
    :param file_path: 文件的地址
    :return: 最后一个var的行数,也就是前缀的行数
    """
    test_str = readFileAll(file_path)

    regex = r'function.*\n( {4}"use strict";\n)?( {4}var.*\n)*'

    matches = re.finditer(regex, test_str, re.MULTILINE)

    count = 0
    for matchNum, match in enumerate(matches, start=1):
        # print(match.group(0))

        for line in match.group(0).splitlines():
            count = count + 1
            # print(line)
            # print('-'*100)
    # print(count)
    # print(file_path)
    return count
