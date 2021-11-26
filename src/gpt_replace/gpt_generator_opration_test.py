import os
import sys
import time
import datetime
import shutil
import math
# print(os.getcwd())

from selectPrefix import getJSfile, getJSfileSize, count_var_lines

# 更新
# os.environ['CUDA_VISIBLE_DEVICES'] = "1"


def info_print(str):
    # 不懂
    print(f"\033[1;34;48m{str}\033[0m")


# 去掉升级版本的提醒
import tensorflow as tf

tf.get_logger().setLevel('ERROR')

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"

import gpt_2_simple as gpt2

def function_generate():
    print(os.getcwd())

    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    generate_model_dir = '../generate_model/models'
    generate_model_name = 'nisl_model'
    generate_prefix_top2000 = "//JavascriptTop2000Functions\n"


    gpt2.load_gpt2(sess,
                   model_dir=generate_model_dir,
                   model_name=generate_model_name,
                   multi_gpu=True)

    generate_prefix = generate_prefix_top2000

    # generate_prefix = hparams.generate_prefix
    print(generate_prefix, "\n-------------------------------")

    texts = gpt2.generate(sess,
                          model_dir=generate_model_dir,
                          model_name=generate_model_name,
                          nsamples=2,
                          batch_size=1,
                          prefix=generate_prefix,
                          top_p=0,
                          top_k=0,
                          temperature=0.5,
                          include_prefix=True,
                          return_as_list=True,
                          length=1023
                          )
    for text in texts:

        print(text)
        print('-'*100)

        # 用前缀分割用例，[1:]去除第一个分割的空白
        # functions = text.split(generate_prefix_top2000)[1:]


if __name__ == '__main__':
    function_generate()