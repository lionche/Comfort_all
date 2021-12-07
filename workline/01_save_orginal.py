# 将初始用例从文件夹中存入Table_Function表中

import os

from src.studyMysql.Table_Operation import Table_Function
from src.utils.utils import readFileAll


# Table_Function格式
# Function_content,SourceFun_id,Mutation_method,Remark

lis = []

dir = r"/root/project/COMFORT/data/generated_data/original_samples/test_corpus_10/no_hint/orginal"

for root, dirs, files in os.walk(dir):
    for file in files:
        file_path = os.path.join(root, file)
        # print(file_path)
        Function_content = readFileAll(file_path)
        SourceFun_id = 0
        Mutation_method = 0
        Remark = None
        lis.append((Function_content, SourceFun_id, Mutation_method, Remark))

# print(lis)

table_Function = Table_Function()
table_Function.insertManyDataToTableFunction(lis=lis)
