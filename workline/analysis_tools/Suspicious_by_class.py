from workline.mysql_tools.Table_Operation import Table_Suspicious_Result

def findTypeId(type_name):
    table_Suspicious_Result = Table_Suspicious_Result()
    testcase_list = table_Suspicious_Result.selectErrorTypeUnfilteredFromTableFunction(type_name)
    testcase_id_set = set()
    for item in testcase_list:
        testcase_id_set.add(item[2])
    print(f"{type_name}类型有{len(testcase_id_set)}个")
    print(testcase_id_set)



if __name__ == '__main__':
    # findTypeId("'crash'")
    findTypeId("'Pass value *** run error'")
    # findTypeId("'Most JS engines pass'")
    # findTypeId("'Majority JS engines throw runtime error/exception'")
    # findTypeId("'Most JS engines crash'")
