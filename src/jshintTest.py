import os
import subprocess
import sys
#给js文件加一个头和尾，为了jshint检测


def add_head_tile(file_path:str):
    file_path_addname = file_path.replace('replace','replace_hint')


    if not os.path.exists(os.path.split(file_path_addname)[0]):
        os.makedirs(os.path.split(file_path_addname)[0])

    with open(file_path, 'r') as f:
        readJS = f.read()


    with open(file_path_addname, 'a', encoding='utf8') as file:
        file.write('var NISLFuzzingFunc = ' + readJS + ';')

corpus_dir = '../data/generated_data/original_samples/replace'


for root, dirs, files in os.walk(corpus_dir):
    for file in files:
        file_path = os.path.join(root, file)
        add_head_tile(file_path)

