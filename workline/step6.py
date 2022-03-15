# 用于网页分析
# import sys
# from pathlib import Path
#
# BASE_DIR = str(Path(__file__).resolve().parent.parent)
# print(BASE_DIR)
# sys.path.append(BASE_DIR)

from workline.table_to_class.Table_Testcase_Class import Testcase_Object

def harness_testcase(testcase):
    testcase_object = Testcase_Object(testcase)
    # print('*' * 25 + f'差分用例{testcase_object.Id}' + '*' * 25)
    # start_time = time.time()
    # 获得差分结果，各个引擎输出
    harness_result = testcase_object.engine_run_testcase()
    # 投票
    different_result_list = harness_result.differential_test()
    return harness_result, different_result_list