import os
import sys

sys.path.append('/root/Comfort_all')

from src.studyMysql.Table_Operation import Table_Testcase
from src.utils.config import generate_model_dir, generate_model_name
from workline.table_to_class.Table_Testcase_Class import Testcase_Object
import tensorflow as tf

tf.get_logger().setLevel('ERROR')
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"
# os.environ['CUDA_VISIBLE_DEVICES'] = "2"

import gpt_2_simple as gpt2

sess = gpt2.start_tf_sess()
sess = gpt2.reset_session(sess)

gpt2.load_gpt2(sess,
               model_dir=generate_model_dir,
               model_name=generate_model_name,
               multi_gpu=True)
table_testcase = Table_Testcase()
list_unfuzzing = table_testcase.selectIdFromTableTestcase(11)
print("一共有%d条需要变异的测试用例" % len(list_unfuzzing))
for unfuzzing_item in list_unfuzzing:
    testcase_object = Testcase_Object(unfuzzing_item)
    # 更新当前用例的mutation time+1
    testcase_object.Mutation_times += 1
    table_testcase.updateMutationTimes(testcase_object.Mutation_times, testcase_object.id)

    print('*' * 25 + f'变异testcase{testcase_object.id}' + '*' * 25)

    testcase_mutation_method1, testcase_mutation_method2 = testcase_object.mutation_method1_2(sess, False)

    testcase_mutation_method4 = testcase_object.mutation_method4()

    all_len = len(testcase_mutation_method1) + len(testcase_mutation_method2) + len(testcase_mutation_method4)

    print(
        f'一共生成{len(testcase_mutation_method1)}个GPT续写用例，{len(testcase_mutation_method2)}个GPT续写替换用例，{len(testcase_mutation_method4)}个操作符替换用例，共{all_len}条，已存入数据库')
