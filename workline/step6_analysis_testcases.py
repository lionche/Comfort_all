import sys
import time
from pathlib import Path

from workline.table_to_class.Table_Testcase_Class import Testcase_Object

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from src.studyMysql.Table_Operation import Table_Testcase, Table_Suspicious_Result

table_Testcase = Table_Testcase()
InterestingTimeList = table_Testcase.selectInterestingTimeFromTableTestcase(1)

table_Suspicious_Result = Table_Suspicious_Result()

# crash_list = table_Suspicious_Result.selectIdFromTableFunction("778")
# print(crash_list)
crash_list = table_Suspicious_Result.selectErrorTypeFromTableFunction("'crash'")
Majority_JS_engines_throw_runtime_error_exception_list = table_Suspicious_Result.selectErrorTypeFromTableFunction(
    "'Majority JS engines throw runtime error/exception'")
Most_JS_engines_pass_list = table_Suspicious_Result.selectErrorTypeFromTableFunction("'Most JS engines pass'")
# print("一共有%d条crash" % len(crash_list))
# print("一共有%d条Majority JS engines throw runtime error/exception" % len(
#     Majority_JS_engines_throw_runtime_error_exception_list))
# print("一共有%d条Most JS engines pass" % len(Most_JS_engines_pass_list))


def harness_testcase(testcase):
    testcase_object = Testcase_Object(testcase)
    print('*' * 25 + f'差分用例{testcase_object.Id}' + '*' * 25)
    print(f'{testcase_object.Testcase_context}')
    start_time = time.time()
    # 获得差分结果，各个引擎输出
    harness_result = testcase_object.engine_run_testcase()

    # 投票
    different_result_list = harness_result.differential_test()

    # 如果一个用例
    if not len(different_result_list):
        print("该用例差分没有触发问题")
    else:
        print("共触发了{}个引擎错误".format(len(different_result_list)))

        # print(f'Inconsistent behaviour found by differential testing:')

        # print(f"------------------------------------------------------\n")

        for interesting_test_result in different_result_list:
            print(interesting_test_result)

        # print(f"JS engines running results:")

        print(f"------------------------------------------------------\n")

        print(f"{harness_result}")

        print(f"------------------------------------------------------\n")

    print(f'共耗时{int(time.time() - start_time)}秒')


if __name__ == '__main__':
    # crash_testcase_id_set = set()
    # for item in crash_list:
    #     crash_testcase_id_set.add(item[2])
    #
    # print(len(crash_testcase_id_set))
    # print(crash_testcase_id_set)
    # Majority_JS_engines_throw_runtime_error_exception_id_set = set()
    # for item in Majority_JS_engines_throw_runtime_error_exception_list:
    #     Majority_JS_engines_throw_runtime_error_exception_id_set.add(item[2])
    #
    # print(len(Majority_JS_engines_throw_runtime_error_exception_id_set))
    # print(Majority_JS_engines_throw_runtime_error_exception_id_set)

    # Most_JS_engines_pass_list_id_set = set()
    # for item in Most_JS_engines_pass_list:
    #     Most_JS_engines_pass_list_id_set.add(item[2])
    #
    # print(len(Most_JS_engines_pass_list_id_set))
    # print(Most_JS_engines_pass_list_id_set)

    #
    # for testcase_id in crash_testcase_id_set:
    #     interesting_testcase = table_Testcase.selectOneFromTableTestcase(testcase_id)
    #     harness_testcase(interesting_testcase)


    interesting_testcase = table_Testcase.selectOneFromTableTestcase(40475)
    harness_testcase(interesting_testcase)
