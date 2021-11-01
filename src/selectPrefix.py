# 从文件中选择前缀
import re

# path js文件的路径
# lines_num截取前几行
from replaceCode2 import readFileAll


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
    code = readFileAll(file_path)

    regex = r'function.*\n( {4}"use strict";\n)?( {4}var.*\n)*'

    test_str = (code)

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



    # print("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum=matchNum, start=match.start(),
        #                                                                     end=match.end(), match=match.group()))
        #
        # for groupNum in range(0, len(match.groups())):
        #     groupNum = groupNum + 1
        #
        #     print("Group {groupNum} found at {start}-{end}: {group}".format(groupNum=groupNum,
        #                                                                     start=match.start(groupNum),
        #                                                                     end=match.end(groupNum),
        #                                                                     group=match.group(groupNum)))
    # count = 1
    # with open(file_path, 'r', encoding='utf-8') as f:
    #     lines = f.readlines()
    #     for idx, line in enumerate(lines):
    #         if line.startswith('    var'):
    #             count = idx + 1
    # return count
