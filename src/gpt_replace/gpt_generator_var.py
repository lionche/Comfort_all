import os
import gpt_2_simple as gpt2
import tensorflow as tf

# 更新

# 去掉升级版本的提醒
os.environ['CUDA_VISIBLE_DEVICES'] = "1"

os.environ["TF_CPP_MIN_LOG_LEVEL"] = "1"
tf.get_logger().setLevel('ERROR')


def function_generate(function_prefix):
    # print(os.getcwd())

    generate_prefix_top2000 = "//JavascriptTop2000Functions\n"

    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    # determine the generate model to use
        # info_print('The NISL model is selected.')
    generate_model_dir = 'src/generate_model/models'
    generate_model_name = 'nisl_model'

    # time.sleep(1)

    # info_print(
    #     "Generating JS test program (approx 15 minutes with gpus when nsamples=512 - including model load time)...\n")
    gpt2.load_gpt2(sess,
                   model_dir=generate_model_dir,
                   model_name=generate_model_name,
                   multi_gpu=True)

    all_functions = []

    generate_prefix = generate_prefix_top2000 + function_prefix

    # generate_prefix = hparams.generate_prefix
    print(function_prefix, "\n-------------------------------")



    texts = gpt2.generate(sess,
                          model_dir=generate_model_dir,
                          model_name=generate_model_name,
                          # nsamples=hparams.nsamples,
                          nsamples=16,
                          # batch_size=hparams.batch_size,
                          batch_size=16,
                          prefix=generate_prefix,
                          top_p=0,
                          top_k=0,
                          temperature=0.5,
                          include_prefix=True,
                          return_as_list=True,
                          length=512
                          )
    for text in texts:


        # 用前缀分割用例，[1:]去除第一个分割的空白
        functions = text.split(generate_prefix_top2000)[1:]
        # 如果生成多个方法，只取第一个符合前缀的方法
        if len(functions) > 1:
            all_functions.append(functions[0])

    return all_functions

