'''
差分测试
'''
import json
import logging
import time
#export LC_ALL=C
import sys

sys.path.append('/root/Comfort_all')

from src.studyMysql.Table_Operation import Table_Testcase, Table_Result, Table_Suspicious_Result

from workline.table_to_class.Table_Testcase_Class import Testcase_Object

table_Testcases = Table_Testcase()
# 获取未差分过得测试用例,进行差分，并将差分后的结果插入到数据库中
# list_unfuzzing = table_Testcases.selectFuzzingTimeFromTableTestcase(0)
list_unfuzzing = table_Testcases.selectIdFromTableTestcase(204)

print("一共有%d条未差分的测试用例" % len(list_unfuzzing))


def insertSuspiciousResultTable(interesting_test_results):
    table_suspicious_Result = Table_Suspicious_Result()
    interesting_test_result_json = json.loads(interesting_test_results.__str__())

    test_result = interesting_test_result_json['Differential Test Result']
    # {'error_type': 'Most JS engines pass', 'testbed_id': 22, 'inconsistent_testbed': 'hermes', 'classify_result': None, 'classify_id': None}
    testcase_id = test_result['testcase_id']
    error_type = test_result['error_type']
    testbed_id = test_result['testbed_id']
    function_id = test_result['function_id']
    remark = None

    table_suspicious_Result.insertDataToTableSuspiciousResult(error_type, testcase_id, function_id, testbed_id, remark)


for unfuzzing_item in list_unfuzzing:
    testcase_object = Testcase_Object(unfuzzing_item)

    print('*' * 25 + f'差分用例{unfuzzing_item[0]}' + '*' * 25)
    start_time = time.time()
    # 获得差分结果，各个引擎输出
    harness_result = testcase_object.engine_run_testcase()
    # 把结果插入到result数据库中
    try:
        harness_result.save_to_table()
    except:
        pass
    #投票
    different_result_list = harness_result.differential_test()

    # 如果一个用例
    if not len(different_result_list):

        print("该用例差分没有触发问题")
    else:

        print("共触发了{}个引擎错误".format(len(different_result_list)))
        testcase_object.add_interesting_times(1)

        # print(f'Inconsistent behaviour found by differential testing:')

        # print(f"------------------------------------------------------\n")


        #可疑结果存入数据库
        for interesting_test_result in different_result_list:
            print(interesting_test_result)
            interesting_test_result.save_to_table()

        # print(f"JS engines running results:")

        # print(f"------------------------------------------------------\n")

        print(f"{harness_result}")

        # print(f"------------------------------------------------------\n")


    print(f'共耗时{int(time.time() - start_time)}秒')
    # 更新testcases表中的fuzzing次数和interesting次数
    testcase_object.updateFuzzingTimesInterestintTimes()

