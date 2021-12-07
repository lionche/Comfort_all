import os
import sys
import time
import datetime
import shutil
import math
# print(os.getcwd())

from selectPrefix import getJSfile, getJSfileSize, count_var_lines
import gpt_2_simple as gpt2

# 更新
os.environ['CUDA_VISIBLE_DEVICES'] = "1"


sess = gpt2.start_tf_sess()
sess = gpt2.reset_session(sess)

generate_model_dir = '/root/project/COMFORT/src/generate_model/models'
generate_model_name = 'nisl_model'
generate_prefix_top2000 = "//JavascriptTop2000Functions\n"

gpt2.load_gpt2(sess,
               model_dir=generate_model_dir,
               model_name=generate_model_name,
               multi_gpu=True)

def info_print(str):
    # 不懂
    print(f"\033[1;34;48m{str}\033[0m")


# 去掉升级版本的提醒
import tensorflow as tf

tf.get_logger().setLevel('ERROR')

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"


def generateJs1(js_folder_root):
    orginal_js_path = os.path.join(js_folder_root, 'orginal')
    # print(orginal_js_path)
    for root, dirs, files in os.walk(orginal_js_path):
        files.sort()

        for file in files:
            file_path = os.path.join(root, file)

            # file_path是具体js的路径

            # print(file_path)

            # 从具体js文件来选择，前缀的开始行数，要求前缀必须含有var的定义
            # count是含有var的最后一行的行数
            count = count_var_lines(file_path)

            # js文件的总行数
            js_len = getJSfileSize(file_path)
            # print(count, js_len)

            # print(file_path)

            # 选择从第几行开始续写，规定前缀的范围，左闭右开
            for cut_line in range(count, js_len):
                start_time = time.time()
                folder_name = file.split('.')[0] + '_js'

                # gpt save path
                gpt_js_save_name = f'{folder_name}/line_{cut_line}'

                # print(gpt_js_save_name)

                function_prefix = getJSfile(file_path, cut_line)

                #   generate JS function by gpt2

                gpt_js_folder_path = os.path.join(js_folder_root, 'gpt')

                gpt_saved_dir = os.path.join(gpt_js_folder_path, gpt_js_save_name)

                try:
                    generated_functions = function_generate(gpt_saved_dir, function_prefix)
                except:
                    print('wrong.so skip')
                    continue
                    pass
                end_time = time.time()
                info_print(
                    f"A total of {len(generated_functions)} testcases were generated, taking {int(end_time - start_time)} seconds.")

def function_generate(saved_dir, function_prefix):

    # sess = gpt2.start_tf_sess()
    # sess = gpt2.reset_session(sess)
    #
    # generate_model_dir = 'src/generate_model/models'
    # generate_model_name = 'nisl_model'
    # generate_prefix_top2000 = "//JavascriptTop2000Functions\n"
    #
    #
    # gpt2.load_gpt2(sess,
    #                model_dir=generate_model_dir,
    #                model_name=generate_model_name,
    #                multi_gpu=True)


    all_functions = []

    generate_prefix = generate_prefix_top2000 + function_prefix

    # generate_prefix = hparams.generate_prefix
    print(function_prefix, "\n-------------------------------")

    nsamples = 32
    batch_size =16
    batches = int(math.ceil(nsamples / batch_size))


    for idx in range(batches):
        try:

            texts = gpt2.generate(sess,
                                  model_dir=generate_model_dir,
                                  model_name=generate_model_name,
                                  nsamples=batch_size,
                                  batch_size=batch_size,
                                  prefix=generate_prefix,
                                  top_p=0,
                                  top_k=0,
                                  temperature=0.5,
                                  include_prefix=True,
                                  return_as_list=True,
                                  length=512
                                  )
            for text in texts:

                # print(text)

                # 用前缀分割用例，[1:]去除第一个分割的空白
                functions = text.split(generate_prefix_top2000)[1:]

                # 如果生成多个方法，只取第一个符合前缀的方法
                # print(len(functions))

                if len(functions) > 1:
                    # print(functions[0])
                    # print("-" * 10)
                    all_functions.append(functions[0])
        except:
            continue

    # save all generated functions by gpt2 to a new file
    if not os.path.exists(saved_dir):
        os.makedirs(saved_dir)

    for idx, function in enumerate(all_functions, start=1):
        with open(os.path.join(saved_dir, f'{idx}.js'), 'w', encoding='utf-8') as f:
            f.write(function)

    return all_functions
