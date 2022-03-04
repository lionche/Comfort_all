import os
import random

from src.studyMysql.Table_Operation import Table_Testcase

table_Testcases = Table_Testcase()
# 获取未差分过得测试用例,进行差分，并将差分后的结果插入到数据库中
list_unfuzzing = table_Testcases.selectAllFromTableTestcase()
random_1000 = random.sample(list_unfuzzing, 1000)
print(len(random_1000))

saved_dir = '/root/Comfort_all/data/js_file_1000'
for item in random_1000:
    print(item[0])

    with open(os.path.join(saved_dir, f'{item[0]}.js'), 'w', encoding='utf-8') as f:
        f.write(item[1])
