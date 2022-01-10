# 将初始用例从文件夹中存入Table_Function表中

import os
import sys
from pathlib import Path
BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)

from src.studyMysql.Table_Operation import Table_Function

# Table_Function格式
# Function_content,SourceFun_id,Mutation_method,Remark

lis = []

dir = r"/root/Comfort_all/data/JStestcases"
current = 0

def readFileAll(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    return code

for root, dirs, files in os.walk(dir):

    files.sort(key=lambda x: int(x[:-3]))
    # -3是后缀名，需要去掉后，按数字大小排序
    # folderList是列表

    for file in files:

        file_path = os.path.join(root, file)
        Function_content = readFileAll(file_path)
        SourceFun_id = 0
        Mutation_method = 0
        Remark = None

        # current += 1
        # process = "\rprocessing: {current}".format(current=str(current + 1))
        # # 可以刷新的打印
        # sys.stdout.write(process)
        #
        # table_Function = Table_Function()
        # try:
        #     table_Function.insertDataToTableFunction(Function_content, SourceFun_id, Mutation_method, Remark)
        # except:
        #     print(file_path)

        lis.append((Function_content, SourceFun_id, Mutation_method, Remark))

print(f'共获取到{len(lis)}条数据，准备添加到数据库中')

table_Function = Table_Function()
count = table_Function.insertManyDataToTableFunction(lis=lis)
print(f'从{dir}中添加了{count}条数据到Table_Function中')
