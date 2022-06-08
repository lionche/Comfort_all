# 将初始用例从文件夹中存入Table_Function表中
import os
import sys
from pathlib import Path

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.mysql_tools.Table_Operation import Table_Suspicious_Result, Table_Result

table_suspicious_Result = Table_Suspicious_Result()
table_Result = Table_Result()

'''
差分测试
'''
import time
# export LC_ALL=C
from multiprocessing.dummy import Pool as ThreadPool
import sys
from pathlib import Path
from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object
from workline.mysql_tools.Table_Operation import Table_Testcase, Table_Suspicious_Result
from workline.table_to_class.Table_Testcase_Class import Testcase_Object

table_Testcases = Table_Testcase()
# 获取未差分过得测试用例,进行差分，并将差分后的结果插入到数据库中
list_unharness = []

with open('/root/Comfort_all/workline/dealid.txt') as f:
    lines: str = f.readlines();
    for item in lines:
        print(item.strip())
        # list_unharness.append(table_Testcases.selectOneFromTableTestcase(1))

# list_unharness.append(item)
        # print(item)

#
#     # list_unharness.append(table_Testcases.selectOneFromTableTestcase(1))
#
# # list_unharness.append(table_Testcases.selectOneFromTableTestcase(1))
# pbar = tqdm(total=len(list_unharness))
# print("一共有%d条未差分的测试用例" % len(list_unharness))
#
# print(list_unharness)
# for testcase in list_unharness:
#
#     testcase_object = Testcase_Object(testcase)
#
#     # print('*' * 25 + f'差分用例{testcase_object.Id}' + '*' * 25)
#     pbar.update(1)
#     start_time = time.time()
#     # 获得差分结果，各个引擎输出
#     harness_result = testcase_object.engine_run_testcase()
#     # 把结果插入到result数据库中
#
#     # 投票
#     different_result_list = harness_result.differential_test()
#
#     # 如果一个用例
#     if not len(different_result_list):
#         pass
#         # print("该用例差分没有触发问题")
#     else:
#         try:
#             harness_result.save_to_table_result()
#         except:
#             pass
#         # print("共触发了{}个引擎错误".format(len(different_result_list)))
#
#         testcase_object.add_interesting_times(1)
#
#         # print(f'Inconsistent behaviour found by differential testing:')
#
#         # print(f"------------------------------------------------------\n")
#
#         # 可疑结果存入数据库
#         for interesting_test_result in different_result_list:
#             # print(interesting_test_result)
#             interesting_test_result.save_to_table_suspicious_Result()
#
#         unfiltered_list = Table_Suspicious_Result().selectTestcseIdFromTable_Suspicious_Result(testcase_object.Id)
#         for suspicious_testcase in unfiltered_list:
#             suspicious_result = Suspicious_Result_Object(suspicious_testcase)
#             suspicious_result.analysis()
#
#         # print(f"JS engines running results:")
#
#         # print(f"------------------------------------------------------\n")
#
#         # print(f"{harness_result}")
#
#         # print(f"------------------------------------------------------\n")
#
#     # print(f'共耗时{int(time.time() - start_time)}秒')
#     # 更新testcases表中的fuzzing次数和interesting次数
#     testcase_object.updateFuzzingTimesInterestintTimes()
#
# # pbar.close()
