# 从Table_Function读取方法，组装用例,再写入Table_Testcase
import itertools
import math
import os
import re
import subprocess
import sys
import tempfile
import time

from workline.table_to_class.Table_Function_Class import Function_Object

sys.path.append('/root/Comfort_all')

# sys.path.append(os.getcwd())
# print(os.getcwd())

from src.studyMysql.Table_Operation import Table_Function

table_Function = Table_Function()

# 获取function表中全部方法
lis = table_Function.selectAllFromTableFunction()
# print(list)

# 从表中读取了 Id, Function_Content, SourceFun_Id, Mutation_Method, Remark
for item in lis:
    function_object = Function_Object(item)
    print('*' * 25 + f'组装function{item[0]}' + '*' * 25)
    function_object.assemble_to_testcase()
