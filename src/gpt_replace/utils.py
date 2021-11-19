import json
import os

def createFolder(saved_dir):
    """
    如果文件夹不存在，就创建
    :param saved_dir: 文件夹的位置
    """
    if not os.path.exists(saved_dir):
        os.makedirs(saved_dir)

def readFileAll(path):
    with open(path, 'r', encoding='utf-8') as f:
        code = f.read()
    return code
def readFileLine(path):
    with open(path, 'r', encoding='utf-8') as f:
        line_list = f.readlines()
    return line_list