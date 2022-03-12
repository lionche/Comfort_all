from pprint import pprint
import sys
from pathlib import Path
BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from tqdm import tqdm

from src.studyMysql.Table_Operation import Table_Suspicious_Result
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object

table_suspicious_Result = Table_Suspicious_Result()
# 分析未分析的可以用例
# unfiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result()
# unfiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result_with_error_type("'Most JS engines pass'")
unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(59)
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(1774)
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(1)
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(256)
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(563)
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(1829)
# print(len(unfiltered_list))
pbar = tqdm(total=len(unfiltered_list))

for item in unfiltered_list:
    suspicious_result = Suspicious_Result_Object(item)
    # print('*' * 25 + f'自动分析用例{suspicious_result.Testcase_id}' + '*' * 25)
    suspicious_result.analysis()
    pbar.update(1)

pbar.close()
