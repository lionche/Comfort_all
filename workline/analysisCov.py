# 1.初始种子覆盖率获取
# 2.变异种子覆盖率获取
# 3.两者覆盖率对比
import json
import statistics

from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Suspicious_Result, Table_Result

table_testcase = Table_Testcase()
table_result = Table_Result()


# list_unMutate = table_testcase.selectInterestingTimeFromTableTestcase(2)

def findCovByTestcaseId(id):
    covJson = table_result.selectTestcaseIdFromTableResult(id)[0][8]
    json_dict = json.loads(covJson)

    json_dict_total = json_dict['data'][0]['totals']

    # 返回覆盖率的json信息
    # print(f'用例{id}覆盖率为{json_dict_total}')
    return json_dict_total


def compareMutateTestcaseCov(id):
    """
    通过testcaseid寻找由他变异出的新用例id
    @param id:
    @return: 一个列表
    """

    covJson = findCovByTestcaseId(id)
    functions_percent = covJson['functions']['percent']
    lines_percent = covJson['lines']['percent']
    regions_percent = covJson['regions']['percent']

    mutate_list = table_testcase.selectSourceTestcaseIdFromTableTestcase(id)
    print('*' * 20 + f'用例{id}变异生成{len(mutate_list)}个用例' + '*' * 20)

    print(
        '变异之前方法覆盖率为{:.2f}%,行覆盖率为{:.2f}%，代码块覆盖率为{:.2f}%'.format(id, functions_percent, lines_percent, regions_percent))

    functions_percent_lis = []
    lines_percent_lis = []
    regions_percent_lis = []

    for item in mutate_list:
        # print(item[0])
        try:
            covJson = findCovByTestcaseId(item[0])
            functions_percent = covJson['functions']['percent']
            lines_percent = covJson['lines']['percent']
            regions_percent = covJson['regions']['percent']

            functions_percent_lis.append(functions_percent)
            lines_percent_lis.append(lines_percent)
            regions_percent_lis.append(regions_percent)

        except:
            pass
            # print(item)
    functions_percent_max = max(functions_percent_lis)
    lines_percent_max = max(lines_percent_lis)
    regions_percent_max = max(regions_percent_lis)

    functions_percent_average = statistics.mean(functions_percent_lis)
    lines_percent_average = statistics.mean(lines_percent_lis)
    regions_percent_average = statistics.mean(regions_percent_lis)
    print(
        '变异之后方法覆盖率最高为{:.2f}%,行覆盖率最高为{:.2f}%，代码块覆盖率最高为{:.2f}%'.format(id, functions_percent_max, lines_percent_max,
                                                                     regions_percent_max))

    print(
        '变异之后方法覆盖率平均为{:.2f}%,行覆盖率平均为{:.2f}%，代码块覆盖率平均为{:.2f}%'.format(id, functions_percent_average,
                                                                     lines_percent_average,
                                                                     regions_percent_average))


# for item in list_unMutate:
#     print(findCovByTestcaseId(item[0]))


if __name__ == '__main__':

    for item in [3,28,31,37,39]:
        compareMutateTestcaseCov(item)
