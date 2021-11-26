import argparse
import os
import time
import datetime
import shutil
import math
from uuid import uuid4
from generate_model.callable_processor import CallableProcessor
from utils.config import Hparams_Generator
import gpt_2_simple as gpt2
# print(os.getcwd())
os.environ["CUDA_VISIBLE_DEVICES"] = "1,2"

class Hparams_Generator:
    parser = argparse.ArgumentParser()
    # finetuning phase
    # 微调的训练集
    parser.add_argument('--data_path', default='/root/project/COMFORT/data/top1000JavaMethods_tmp.txt', type=str,
                        help='Finetuning data path')
    # gpt预训练模型文件夹
    parser.add_argument('--gpt2_model_dir', default='/root/project/COMFORT/src/generate_model/models', type=str,
                        help='Pretrained gpt2 model path')
    # gpt预训练模型名称
    # parser.add_argument('--gpt2_model_name', default='117M', type=str,
    parser.add_argument('--gpt2_model_name', default='1558M', type=str,
                        help='Pretrained gpt2 model name, only "117M" is available')
    # gpt微调模型文件夹
    parser.add_argument('--finetuned_model_dir', default='/root/project/COMFORT/src/generate_model/models', type=str,
                        help='Finetuned model path')
    # gpt微调模型名称
    parser.add_argument('--finetuned_model_name', default='finetuned_model', type=str,
                        help='Finetuned model name')
    # 微调步数
    parser.add_argument('--steps', default=-1, type=int, help='Number of steps to finetune')



def info_print(str):
    print(f"\033[1;34;48m{str}\033[0m")
# init params

hparams = Hparams_Generator().parser.parse_args()

def gpt2_finetune(hparams):
    info_print("Model finetuning, please wait. (Press Ctrl+C to exit early)")
    sess = gpt2.start_tf_sess()

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
                  multi_gpu=True,
                  steps=hparams.steps)

if __name__ == '__main__':
    gpt2_finetune(hparams)