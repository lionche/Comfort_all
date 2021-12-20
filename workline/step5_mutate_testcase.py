from src.studyMysql.Table_Operation import Table_Testcase
from workline.table_to_class.Table_Testcase_Class import Testcase_Object

table_Testcases = Table_Testcase()
list_unfuzzing = table_Testcases.selectIdFromTableTestcase(223)
print("一共有%d条未差分的测试用例" % len(list_unfuzzing))
for unfuzzing_item in list_unfuzzing:
    testcase_object = Testcase_Object(unfuzzing_item)
    testcase_mutation_methon1 = testcase_object.mutation_methon1()
    print(f'一共生成{len(testcase_mutation_methon1)}条差分测试用例')

