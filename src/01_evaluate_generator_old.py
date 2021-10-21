import os
import time
import datetime
import shutil
import math
from uuid import uuid4
from generate_model.callable_processor import CallableProcessor

from utils.config import Hparams_Generator
import gpt_2_simple as gpt2

os.environ['CUDA_VISIBLE_DEVICES'] = "1"


def info_print(str):
    # 不懂
    print(f"\033[1;34;48m{str}\033[0m")


# init params
hparams = Hparams_Generator().parser.parse_args()
if hparams.multi_gpu == 1:
    info_print('GPU enabled.')
    hparams.multi_gpu = True  # enable gpu
else:
    info_print('GPU disabled.')
    hparams.multi_gpu = False
    os.environ["CUDA_VISIBLE_DEVICES"] = "-1"  # disable gpu
time.sleep(1)

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'  # Mask prompts for TensorFlow


def gpt2_finetune(hparams):
    info_print("Model finetuning, please wait. (Press Ctrl+C to exit early)")
    sess = gpt2.start_tf_sess()
    # input check
    if not os.path.exists(os.path.join(hparams.gpt2_model_dir, hparams.gpt2_model_name)):
        raise FileNotFoundError("The specified gpt2 pretrained model doesn't exist, please restore the default params.")

    # clear checkpoint dir
    model_path = os.path.join(hparams.finetuned_model_dir, hparams.finetuned_model_name)
    if os.path.exists(model_path):
        shutil.rmtree(model_path)

    gpt2.finetune(sess=sess,
                  dataset=hparams.data_path,
                  model_dir=hparams.gpt2_model_dir,
                  model_name=hparams.gpt2_model_name,
                  checkpoint_dir=hparams.finetuned_model_dir,
                  run_name=hparams.finetuned_model_name,
                  multi_gpu=hparams.multi_gpu,
                  steps=hparams.steps)


def function_generate(hparams, saved_dir):
    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    # determine the generate model to use
    if hparams.use_nisl_model == 1:
        info_print('The NISL model is selected.')
        generate_model_dir = hparams.gpt2_model_dir
        generate_model_name = 'nisl_model'
    else:
        # model check
        info_print('The new model is selected.')
        generate_model_dir = hparams.finetuned_model_dir
        generate_model_name = hparams.finetuned_model_name
        if not os.path.exists(os.path.join(os.path.join(generate_model_dir, generate_model_name), 'checkpoint')):
            raise FileNotFoundError(
                "The specified model doesn't exist, please finetune first or set 'use_nisl_model=1'")
    time.sleep(1)

    info_print(
        "Generating JS test program (approx 15 minutes with gpus when nsamples=512 - including model load time)...\n")
    gpt2.load_gpt2(sess,
                   model_dir=generate_model_dir,
                   model_name=generate_model_name,
                   multi_gpu=hparams.multi_gpu)

    # assert condition
    # 用来让程序测试这个condition，如果condition为false，那么raise一个AssertionError出来。逻辑上等同于：
    # if not condition:
    #     raise AssertionError()

    assert hparams.batch_size != 0, "'batch_size' cannot be 0!"
    # batches = int(math.ceil(hparams.nsamples / hparams.batch_size))
    # remainder = hparams.nsamples % hparams.batch_size

    all_functions = []

    # 设置前缀'
    generate_prefix = hparams.generate_prefix + """var obj1 = {};
var obj2 = {};
    """
    print(generate_prefix, "\n-------------------------------")

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

    # when the last batch, intercepted by the remainder
    # if idx == batches - 1:
    #     if remainder != 0:
    #         texts = texts[:remainder]

    # 当nsamples!=1时，一次生成几个段落。text为一个段落

    for text in texts:

        # print(text)

        # 用前缀分割用例，[1:]去除第一个分割的空白
        functions = text.split(hparams.generate_prefix)[1:]

        # 如果生成多个方法，只取第一个符合前缀的方法
        if len(functions) > 1:
            # print(functions[0])
            # print("-" * 10)
            all_functions.append(functions[0])

    # save all generated functions by gpt2 to a new file
    if not os.path.exists(saved_dir):
        os.makedirs(saved_dir)

    for idx, function in enumerate(all_functions, start=1):
        with open(os.path.join(saved_dir, f'{idx}.js'), 'w', encoding='utf-8') as f:
            f.write(function)

    return all_functions


def testcase_assemble(functions, saved_dir):
    info_print(f"Assembly test program (approx 30 seconds)...\n")
    time.sleep(2)
    callable_processor = CallableProcessor()
    testcases = []
    for function in functions:
        try:
            testcases.append(callable_processor.get_self_calling(function))
        except:
            testcases.append('')  # Guarantee idx consistent

    # print info
    # info_print(f"Test program after creating the calling routine: \n")
    # for testcase in testcases:
    #     print(testcase)
    #     print('=' * 50)

    # formatting
    testcases = [i.strip() + '\n' for i in testcases]

    # save all testcase to a new file
    if not os.path.exists(saved_dir):
        os.makedirs(saved_dir)
    for idx, testcase in enumerate(testcases, start=1):
        with open(os.path.join(saved_dir, f'{idx}.js'), 'w', encoding='utf-8') as f:
            f.write(testcase)

    return testcases


if __name__ == '__main__':
    if hparams.mode == 'finetune':
        gpt2_finetune(hparams)
    elif hparams.mode == 'generate':
        start_time = time.time()

        # new a directory name
        # time_stamp = datetime.datetime.now().strftime('%Y_%m_%d_%H_%M_%S')
        # identifier = str(uuid4())[:8]
        # new_dir_name = f'{time_stamp}_{identifier}'
        # new_dir_name = f'{time_stamp}_{identifier}'


        # generate JS function by gpt2
        samples_saved_dir = os.path.join(hparams.sample_dir, 'test')
        generated_functions = function_generate(hparams, samples_saved_dir)
        # function_generate只生成方法
        # assemble JS testcase
        testcases_saved_dir = os.path.join(hparams.testcase_dir, 'test')
        testcase_assemble(generated_functions, testcases_saved_dir)
        end_time = time.time()
        info_print(
            f"A total of {len(generated_functions)} testcases were generated, taking {int(end_time - start_time)} seconds.")
        info_print(f"All generated functions by gpt2 are saved in: {samples_saved_dir}")
            # info_print(f"All generated testcases are saved in: {testcases_saved_dir}")

    else:
        raise ValueError('The "mode" parameter is invalid. Please enter it again!')
