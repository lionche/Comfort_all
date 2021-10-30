import os
import subprocess
import sys


# 给js文件加一个头和尾，为了jshint检测
from src.utils.utils import createFolder


def add_head_tile(file_path: str):
    js_hint_path_name = os.path.dirname(file_path).replace(corpus_no_hint_dir, corpus_hint_dir)
    js_name = os.path.split(file_path)[1]
    # print(js_hint_path_name)

    createFolder(js_hint_path_name)

    with open(file_path, 'r') as f:
        readJS = f.read()

    with open(os.path.join(js_hint_path_name, js_name), 'a', encoding='utf8') as file:
        file.write('var NISLFuzzingFunc = ' + readJS + ';')


if __name__ == '__main__':

    corpus_root = '../data/generated_data/original_samples/test_corpus_100/'
    corpus_no_hint_dir = corpus_root + 'no_hint'
    # corpus_dir = '../data/generated_data/original_samples/gpt_seed'

    corpus_hint_dir = corpus_root + 'hint'

    for root, dirs, files in os.walk(corpus_no_hint_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                add_head_tile(file_path)
