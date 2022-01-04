# 从Table_Function读取方法，组装用例,再写入Table_Testcase
import sys
import time
from multiprocessing.dummy import Pool as ThreadPool
sys.path.append('/root/Comfort_all')
from workline.table_to_class.Table_Function_Class import Function_Object
from src.studyMysql.Table_Operation import Table_Function

start_time =time.time()

table_Function = Table_Function()

# 获取function表中全部方法
lis = table_Function.selectAllFromTableFunction()

def muti_assemble(func):
    function_object = Function_Object(func)
    print('*' * 25 + f'组装function{func[0]}' + '*' * 25)
    function_object.assemble_to_testcase()

pool = ThreadPool()
results = pool.map(muti_assemble, lis)
pool.close()
pool.join()


end_time =time.time()

print(f'take {int(end_time-start_time)}s')