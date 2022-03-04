'''
差分测试,不存入数据库
'''
import time
#export LC_ALL=C
from multiprocessing.dummy import Pool as ThreadPool
import sys
from pathlib import Path
BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)

from src.studyMysql.Table_Operation import Table_Testcase

from workline.table_to_class.Table_Testcase_Class import Testcase_Object

table_Testcases = Table_Testcase()
# 获取未差分过得测试用例,进行差分，并将差分后的结果插入到数据库中
testcases_to_fuzz = table_Testcases.selectOneFromTableTestcase(4137)

def muti_harness(testcase):
    testcase_object = Testcase_Object(testcase)

    print('*' * 25 + f'差分用例{testcase_object.Id}' + '*' * 25)
    start_time = time.time()
    # 获得差分结果，各个引擎输出
    harness_result = testcase_object.engine_run_testcase(timeout="600")
    # 把结果插入到result数据库中
    #投票
    different_result_list = harness_result.differential_test()

    print(f"{harness_result}")

    # 如果一个用例
    if not len(different_result_list):

        print("该用例差分没有触发问题")
    else:

        print("共触发了{}个引擎错误".format(len(different_result_list)))

        for different_result in different_result_list:
            print(different_result)

        # print(f'Inconsistent behaviour found by differential testing:')

        # print(f"------------------------------------------------------\n")


        # print(f"JS engines running results:")

        # print(f"------------------------------------------------------\n")

        # print(f"{harness_result}")

        # print(f"------------------------------------------------------\n")


    print(f'共耗时{int(time.time() - start_time)}秒')
    # 更新testcases表中的fuzzing次数和interesting次数


muti_harness(testcases_to_fuzz)

