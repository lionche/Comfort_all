import os
import sys
from pathlib import Path

from tqdm import tqdm

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from src.utils.config import generate_model_dir, generate_model_name
from workline.table_to_class.Table_Testcase_Class import Testcase_Object
import tensorflow as tf
from workline.mysql_tools.Table_Operation import Table_Testcase

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

list_unMutate = table_testcase.selectInterestingTimeFromTableTestcase(1)

pbar = tqdm(total=len(list_unMutate))

print("一共有%d条需要变异的测试用例" % len(list_unMutate))
for unMutate_item in list_unMutate:
    testcase_object = Testcase_Object(unMutate_item)
    # 更新当前用例的mutation time+1
    testcase_object.Mutation_times += 1
    table_testcase.updateMutationTimes(testcase_object.Mutation_times, testcase_object.Id)

    # print('*' * 25 + f'变异testcase{testcase_object.Id}' + '*' * 25)

    testcase_mutation_method1, testcase_mutation_method2 = testcase_object.mutation_method1_2(sess, False)

    random_block_remove_pass, while_if_swap_pass, condition_code_add_pass, replaceOperator_pass, replace_similar_API_pass, replace_return_API_pass, proto_pollution_pass, property_modification_pass, hotspot_optimization_pass = testcase_object.mutation_method4()
    pbar.update(1)
    # print("random_block_remove_pass:", len(random_block_remove_pass))
    # print("while_if_swap_pass:", len(while_if_swap_pass))
    # print("condition_code_add_pass:", len(condition_code_add_pass))
    # print("replaceOperator_pass:", len(replaceOperator_pass))
    # print("replace_similar_API_pass:", len(replace_similar_API_pass))
    # print("replace_return_API_pass:", len(replace_return_API_pass))
    # print("proto_pollution_pass:", len(proto_pollution_pass))
    # print("property_modification_pass:", len(property_modification_pass))
    # print("hotspot_optimization_pass:", len(hotspot_optimization_pass))

    # all_len = len(testcase_mutation_method1) + len(testcase_mutation_method2) + len(testcase_mutation_method4)

    # print(
    #     f'一共生成{len(testcase_mutation_method1)}个GPT续写用例，{len(testcase_mutation_method2)}个GPT续写替换用例，{len(testcase_mutation_method4)}个操作符替换用例，共{all_len}条，已存入数据库')
pbar.close()