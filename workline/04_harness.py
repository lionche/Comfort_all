'''
差分测试
'''
import json
import logging
import time

from src.studyMysql.Table_Operation import Table_Testcase, Table_Result, Table_Suspicious_Result

from workline.table_to_class.Table_Testcase_Class import Testcase_Object

table_Testcases = Table_Testcase()
# 获取未差分过得测试用例,进行差分，并将差分后的结果插入到数据库中
list_unfuzzing = table_Testcases.selectFuzzingTimeFromTableTestcase(0)

print("一共有%d条未差分的测试用例" % len(list_unfuzzing))


def insertRessultTable(harness_result):
    table_Result = Table_Result()
    harness_result_json = json.loads(harness_result.__str__())
    # harness_result[]
    # print(type(harness_result))
    Harness_Result = harness_result_json['Harness Result']
    # print(Harness_Result)
    # {'testcase_id': 284,
    # 'testcase_context': 'var NISLFuzzingFunc = function(x, y) {\n    this.x = x;\n    this.y = y;\n};\nvar NISLParameter0 = [-80558, 32, 92115144, -65, -185892238, 537131, -1];\nvar NISLParameter1 = "tn,q\'/KU+R\\\\6KDpp[cTye\\"3H3MJudb0<Tx^!#>r28VX;A_p9Y]PKu=Sj\\"Bn4|Qg?K@sk2+L0ac2t4/ ?4&rrV}XhNl$RC/PYw,?=&:M4)sCe}[KFNN~~=+GHvaPC|B";\nvar NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);\nprint(NISLCallingResult);',
    # 'outputs': [{'testbed_id': 1, 'testbed_location': '/root/.jsvu/engines/v8-0e44fef/x64/d8', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 91, 'event_start_epoch_ms': 1639182561206}, {'testbed_id': 2, 'testbed_location': '/root/.jsvu/engines/spiderMonkey-52.9.1pre1/bin/js', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 76, 'event_start_epoch_ms': 1639182561207}, {'testbed_id': 3, 'testbed_location': '/root/.jsvu/chakra-1.11.8', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 36, 'event_start_epoch_ms': 1639182561207}, {'testbed_id': 4, 'testbed_location': '/root/.jsvu/engines/WebKit-b3fa4c5/WebKit/WebKitBuild/Debug/bin/jsc', 'returncode': 127, 'stdout': '', 'stderr': '/root/.jsvu/engines/WebKit-b3fa4c5/WebKit/WebKitBuild/Debug/bin/jsc: error while loading shared libraries: libicui18n.so.60: cannot open shared object file: No such file or directory\n', 'duration_ms': 12, 'event_start_epoch_ms': 1639182561210}, {'testbed_id': 5, 'testbed_location': '/root/.jsvu/hermes-0.1.0 -w', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 10, 'event_start_epoch_ms': 1639182561216}, {'testbed_id': 6, 'testbed_location': '/root/.jsvu/quickjs-2019-09-01', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 14, 'event_start_epoch_ms': 1639182561216}, {'testbed_id': 7, 'testbed_location': '/root/.jsvu/graaljs-20.1.0', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 22, 'event_start_epoch_ms': 1639182561218}, {'testbed_id': 8, 'testbed_location': '/root/.jsvu/jerryscript-7df87b7', 'returncode': 0, 'stdout': 'undefined\n', 'stderr': '', 'duration_ms': 24, 'event_start_epoch_ms': 1639182561223}]}
    testcase_id = Harness_Result['testcase_id']
    outputs = Harness_Result['outputs']
    for output in outputs:
        testbed_id = output['testbed_id']
        testbed_location = output['testbed_location']
        returncode = output['returncode']
        stdout = output['stdout']
        stderr = output['stderr']
        duration_ms = output['duration_ms']
        event_start_epoch_ms = output['event_start_epoch_ms']
        table_Result.insertDataToTableResult(testcase_id, testbed_id, returncode, stdout, stderr, duration_ms, 0, 0,
                                             None)


def insertSuspiciousResultTable(interesting_test_results,SourceFun_id):
    table_suspicious_Result = Table_Suspicious_Result()
    interesting_test_result_json = json.loads(interesting_test_results.__str__())

    test_result = interesting_test_result_json['Differential Test Result']
    #{'error_type': 'Most JS engines pass', 'testbed_id': 22, 'inconsistent_testbed': 'hermes', 'classify_result': None, 'classify_id': None}
    testcase_id = test_result['testcase_id']
    error_type = test_result['error_type']
    testbed_id = test_result['testbed_id']
    function_id = SourceFun_id
    remark = None

    table_suspicious_Result.insertDataToTableSuspiciousResult(error_type,testcase_id, function_id,testbed_id, remark)


for unfuzzing_item in list_unfuzzing:
    testcase_object = Testcase_Object(unfuzzing_item)

    print('*' * 25 + f'差分用例{unfuzzing_item[0]}' + '*' * 25)
    start_time = time.time()
    # 获得差分结果，各个引擎输出
    harness_result = testcase_object.engine_run_testcase()

    # 把结果插入到result数据库中
    insertRessultTable(harness_result)

    # 进行投票，输出不一致的结果
    different_result_list = harness_result.differential_test()

    # 如果一个用例
    if not len(different_result_list):

        print("该用例差分没有触发问题")
    else:

        print("共触发了{}个引擎错误".format(len(different_result_list)))
        testcase_object.add_interesting_times(len(different_result_list))

        print(f'Inconsistent behaviour found by differential testing:')

        print(f"------------------------------------------------------\n")

        SourceFun_id = testcase_object.SourceFun_id

        for interesting_test_result in different_result_list:
            print(interesting_test_result)
            insertSuspiciousResultTable(interesting_test_result,SourceFun_id)

        print(f"JS engines running results:")

        print(f"------------------------------------------------------\n")

        print(f"{harness_result}")

        print(f"------------------------------------------------------\n")

        # print(testcase_object.Fuzzing_times())

    print(f'共耗时{int(time.time() - start_time)}秒')
        # 更新testcases表中的fuzzing次数和interesting次数
    table_Testcases.updateFuzzingTimesInterestintTimes(testcase_object.Fuzzing_times,
                                                       testcase_object.Interesting_times, testcase_object.id)
