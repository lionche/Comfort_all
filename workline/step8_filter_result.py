# 对测试问题的用例进行分类，分类的依据是，各个引擎对于这个用例的return code和stdout 和stderr。

# 分类顺序
# 1.首先对可疑用例表中所有的用例进行反向查询，查找其触发各个引擎的return code，如果对应的相同，则将这些可疑用例分为一类。
# 1.1 可疑用例表中的is_filter列，0代表没有被过滤，1代表已过滤。
#
# 2.在上一步已经分类好的每一类中，再进行二次分类，分类的依据是stdout和stderr，根据返回内容的相似性，再细分。
from pprint import pprint

from src.studyMysql.Table_Operation import Table_Suspicious_Result, Table_Result

# class filter(object):
from tqdm import tqdm

# 1.1 可疑用例表中的is_filter列，0代表没有被过滤，1代表已过滤。

table_suspicious_Result = Table_Suspicious_Result()

# UnFiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result("'Most JS engines pass'")
# UnFiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result("'crash'")
UnFiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result_with_error_type("'Pass value *** run error'")
# UnFiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result("'Majority JS engines throw runtime error/exception'")

# findTypeId("'crash'")
# findTypeId("'Pass value *** run error'")
# findTypeId("'Most JS engines pass'")
# findTypeId("'Majority JS engines throw runtime error/exception'")
# findTypeId("'Most JS engines crash'")

lst1 = []
for UnFiltered_item in UnFiltered_list:
    lst1.append(UnFiltered_item[2])

UnFiltered_list_no_repeat = sorted(list(set(lst1)))
# print(len(UnFiltered_list_no_repeat))

table_Result = Table_Result()

# 定义一个字典，格式为{用例id:error_info}
dict_testcases_result = {}
pbar = tqdm(total=len(UnFiltered_list_no_repeat))

for UnFiltered_list_no_repeat_item in UnFiltered_list_no_repeat:
    Result_list = table_Result.selectTestcasesFromTableResult(UnFiltered_list_no_repeat_item)
    error_info = ''
    for item in Result_list:
        Testcase_Id: str = item[1]
        Testbed_Id = item[2]
        Returncode = item[3]
        # print(f'用例id{Testcase_Id},引擎编号{Testbed_Id},返回值{Returncode}')
        error_info += str(Testbed_Id)
        error_info += f'({str(Returncode)})'
    # print(error_info)

    dict_testcases_result[Testcase_Id] = error_info

    pbar.update(1)
# print(dict_testcases_result)
pbar.close()


def getResult(a):
    # 将字典中按相同的值重新分类
    from collections import defaultdict
    new_a = defaultdict(list)
    for key, value in a.items():
        new_a[value].append(key)
    return new_a


ret = getResult(dict_testcases_result)
for error_info, testcase_ids in ret.items():
    print(testcase_ids, ':', error_info)

# import yaml
#
# with open('/root/Comfort_all/workline/filter_info.yml', 'r', encoding='utf-8') as fr:
#     filter_info = yaml.load(fr, Loader=yaml.SafeLoader)['returncode_type']
#
#
# def autoAnalysis(testcase_ids, error_info):
#     """
#     自动分析用例
#     :param testcase_ids: 一个包含用例编号的数组
#     :param error_info: 引擎的returncode
#     :return:
#     """
#     for returncode_type in filter_info:
#         #匹配引擎报错信息
#         if returncode_type['error_info'] == error_info:
#             pprint(returncode_type)
#             print(testcase_ids)
#             for testcase_id in testcase_ids:
#                 print(f"{testcase_id}错误代号为{returncode_type['error_info']}")
#             testcase = table_Result.selectTestcasesFromTableResult(testcase_id)


# for error_info, testcase_ids in ret.items():
#
#     # for id in testcase_ids:
#     # print(id)
#     # print(testcase_ids, ':', error_info)
#     # 通过error_info在文档中匹配
#     autoAnalysis(testcase_ids, error_info)
