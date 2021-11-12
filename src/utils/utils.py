import json
import os
from collections import OrderedDict


def print_info(info):
    for i in info:  # i是字典
        print(f'{i.get("APIName")}:')
        semantic_info = i.get("Semantic_info")
        for j in semantic_info:
            if j.get('name') != 'that':
                print(json.dumps(dict_order(j), indent=4, ensure_ascii=False))

        print('=' * 50)


def dict_order(_dict):
    """Controls the print order of the dictionary
    """
    new_dict = OrderedDict()
    new_dict['name'] = _dict.get('name')
    new_dict['type'] = _dict.get('type')
    new_dict['conditions'] = _dict.get('conditions')
    new_dict['scopes'] = _dict.get('scopes')
    new_dict['values'] = _dict.get('values')
    return new_dict

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