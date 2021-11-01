import os
import time
import datetime
import shutil
import math
from selectPrefix import getJSfile, getJSfileSize, count_var_lines
from utils.config import Hparams_Generator
import gpt_2_simple as gpt2

# 更新
os.environ['CUDA_VISIBLE_DEVICES'] = "1"


def info_print(str):
    # 不懂
    print(f"\033[1;34;48m{str}\033[0m")


# init params
hparams = Hparams_Generator().parser.parse_args()
if hparams.multi_gpu == 1:
    # info_print('GPU enabled.')
    hparams.multi_gpu = True  # enable gpu
else:
    info_print('GPU disabled.')
    hparams.multi_gpu = False
    os.environ["CUDA_VISIBLE_DEVICES"] = "-1"  # disable gpu
time.sleep(1)
#去掉升级版本的提醒
import tensorflow as tf
tf.get_logger().setLevel('ERROR')

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"

def function_generate(hparams, saved_dir, function_prefix):
    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    # determine the generate model to use
    if hparams.use_nisl_model == 1:
        # info_print('The NISL model is selected.')
        generate_model_dir = hparams.gpt2_model_dir
        generate_model_name = 'nisl_model'
    else:
        # model check
        # info_print('The new model is selected.')
        generate_model_dir = hparams.finetuned_model_dir
        generate_model_name = hparams.finetuned_model_name
        if not os.path.exists(os.path.join(os.path.join(generate_model_dir, generate_model_name), 'checkpoint')):
            raise FileNotFoundError(
                "The specified model doesn't exist, please finetune first or set 'use_nisl_model=1'")
    # time.sleep(1)

    # info_print(
    #     "Generating JS test program (approx 15 minutes with gpus when nsamples=512 - including model load time)...\n")
    gpt2.load_gpt2(sess,
                   model_dir=generate_model_dir,
                   model_name=generate_model_name,
                   multi_gpu=hparams.multi_gpu)

    # assert condition
    # 用来让程序测试这个condition，如果condition为false，那么raise一个AssertionError出来。逻辑上等同于：
    # if not condition:
    #     raise AssertionError()

    # assert hparams.batch_size != 0, "'batch_size' cannot be 0!"
    # batches = int(math.ceil(hparams.nsamples / hparams.batch_size))
    # remainder = hparams.nsamples % hparams.batch_size

    all_functions = []

    # 设置前缀
    #
    # function_prefix = '''function test0() {
    # var GiantPrintArray = [];'''

    # function_prefix = '''
    # function(
    #     '''
    # function_prefix = 'function(e, t) {'

    # generate_prefix = hparams.generate_prefix + 'function(u, f, o'
    # generate_prefix = hparams.generate_prefix + 'function(e){'
    generate_prefix = hparams.generate_prefix + function_prefix

    # generate_prefix = hparams.generate_prefix
    print(function_prefix, "\n-------------------------------")

    texts = gpt2.generate(sess,
                          model_dir=generate_model_dir,
                          model_name=generate_model_name,
                          nsamples=hparams.nsamples,
                          batch_size=hparams.batch_size,
                          prefix=generate_prefix,
                          top_p=hparams.top_p,
                          top_k=hparams.top_k,
                          temperature=hparams.temperature,
                          include_prefix=True,
                          return_as_list=True,
                          length=512
                          )
    for text in texts:

        # print(text)

        # 用前缀分割用例，[1:]去除第一个分割的空白
        functions = text.split(hparams.generate_prefix)[1:]

        # 如果生成多个方法，只取第一个符合前缀的方法
        if len(functions) > 1:
            # print(functions[0])
            # print("-" * 10)
            all_functions.append(functions[0])

    # for function in functions:
    #     print(function)

    # for text in texts:
    #
    #     print(text)
    #
    #     functions = text.split(hparams.generate_prefix)[1:]
    #
    #     # get rid of the last one to prevent syntax errors
    #     if len(functions) >= 2:
    #         functions = functions[:-1]
    #
    #     all_functions += functions

    # print
    # for function in functions:
    #     print(function)
    #     print('=' * 50)

    # info_print(f'Generating {idx + 1}/{batches}.')

    # formatting
    # 默认去除空格
    # all_functions = [i.strip() + '\n' for i in all_functions]

    # for i in all_functions:
    #     print(i)

    # save all generated functions by gpt2 to a new file
    if not os.path.exists(saved_dir):
        os.makedirs(saved_dir)

    for idx, function in enumerate(all_functions, start=1):
        with open(os.path.join(saved_dir, f'{idx}.js'), 'w', encoding='utf-8') as f:
            f.write(function)

    return all_functions


def generateJs(js_folder_root):

    orginal_js_path = os.path.join(js_folder_root, 'orginal')

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

                print(gpt_js_save_name)

                try:
                    generated_functions = function_generate(hparams, gpt_saved_dir, function_prefix)
                except:
                    print('wrong.so skip')
                    continue
                    pass
                end_time = time.time()
                info_print(
                    f"A total of {len(generated_functions)} testcases were generated, taking {int(end_time - start_time)} seconds.")

            # os.remove(js_file_path)


if __name__ == '__main__':

    # js_folder_root要处理的文件夹
    # 应包含 orginal，gpt，replace三个文件夹
    # orginal是原js文件 ，gpt保存gpt续写出的代码，replace保存替换片段的代码
    js_folder_root = 'data/generated_data/original_samples/test_corpus_1000/no_hint/'

    generateJs(js_folder_root)
