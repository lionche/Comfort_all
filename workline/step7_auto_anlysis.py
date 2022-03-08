from src.studyMysql.Table_Operation import Table_Suspicious_Result
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object

table_suspicious_Result = Table_Suspicious_Result()
unfiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result()

for item in unfiltered_list:
    suspicious_result = Suspicious_Result_Object(item)
    suspicious_result.analysis()