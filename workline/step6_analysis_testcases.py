from src.studyMysql.Table_Operation import Table_Testcase

table_Testcase = Table_Testcase()

InterestingTimeList = table_Testcase.selectInterestingTimeFromTableTestcase(1)

print("一共有%d条可疑测试用例" % len(InterestingTimeList))

for item in InterestingTimeList:
    print(item[0])
