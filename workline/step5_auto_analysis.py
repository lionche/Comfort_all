import time
from multiprocessing.pool import ThreadPool
from pprint import pprint
import sys
from pathlib import Path


BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from tqdm import tqdm
from workline.table_to_class.Table_Suspicious_Result_Class import Suspicious_Result_Object
from workline.mysql_tools.Table_Operation import Table_Suspicious_Result

table_suspicious_Result = Table_Suspicious_Result()
# 分析未分析的可以用例
unfiltered_list = table_suspicious_Result.selectUnFilteredFromTable_Suspicious_Result()
# unfiltered_list = table_suspicious_Result.selectIdFromTable_Suspicious_Result(12)
pbar = tqdm(total=len(unfiltered_list))
#
# for item in unfiltered_list:
#     suspicious_result = Suspicious_Result_Object(item)
#     # print('*' * 25 + f'自动分析用例{suspicious_result.Testcase_id}' + '*' * 25)
#     suspicious_result.analysis()
#     pbar.update(1)
#
start_time = time.time()


def muti_analysis(suspicious_Result):
    suspicious_result = Suspicious_Result_Object(suspicious_Result)
    # print('*' * 25 + f'自动分析用例{suspicious_result.Testcase_id}' + '*' * 25)
    try:
        suspicious_result.analysis()
        # print('*' * 25 + f'自动分析用例{suspicious_result.Testcase_id}' + '*' * 25)


    except:
        print('*' * 25 + f'自动分析用例{suspicious_result.Testcase_id}出错' + '*' * 25)

    pbar.update(1)

pool = ThreadPool()
results = pool.map(muti_analysis, unfiltered_list)
pool.close()
pool.join()

end_time = time.time()
pbar.close()

print(f'take {int(end_time - start_time)}s')
