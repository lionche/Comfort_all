# 从Table_Function读取方法，使用gpt变异，然后jshint语法检查,再写入Table_Function

import sys
sys.path.append('/root/project/COMFORT')
import os
import re
from workline.table_to_class.Table_Function_Class import Function_Object

# sys.path.append(os.getcwd())
# print(os.getcwd())

from src.studyMysql.Table_Operation import Table_Function

import tensorflow as tf

tf.get_logger().setLevel('ERROR')
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"
os.environ['CUDA_VISIBLE_DEVICES'] = "2"

import gpt_2_simple as gpt2


table_Function = Table_Function()

sess = gpt2.start_tf_sess()
sess = gpt2.reset_session(sess)

generate_model_dir = '/root/project/COMFORT/src/generate_model/models'
generate_model_name = 'nisl_model'
# generate_prefix_top2000 = "//JavascriptTop2000Functions\n"

gpt2.load_gpt2(sess,
               model_dir=generate_model_dir,
               model_name=generate_model_name,
               multi_gpu=True)

# lis = table_Function.selectAllFromTableFunction()
# 选择用SourceId==0的
lis = table_Function.selectSourceIdFromTableFunction(0)
# print(list)

# 从表中读取了 Id, Function_Content, SourceFun_Id, Mutation_Method, Remark
for item in lis:
    function_object = Function_Object(item)
    print('*' * 25 + f'变异function{item[0]}' + '*' * 25)
    function_object.gpt_mutation_1_2(sess)
    function_object.gpt_mutation_3(sess)
    # print('利用方法进行用例组装')
