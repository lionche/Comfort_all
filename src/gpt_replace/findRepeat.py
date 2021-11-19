#找到代码中重复的部分，然后删掉重复的文件
import os
import hashlib

#md5函数
from shutil import copy
from utils import createFolder

def get_file_md5(f):
    m = hashlib.md5()
    data = f.read(1024)  #将文件分块读取
    m.update(data)
    return m.hexdigest()


def ergodicFolder(folderPath):
    """

    遍历文件夹，文件夹中为要检测重复的js文件
    :param folderPath: 文件夹的位置
    :return: 文件夹中没有重复内容的js文件的字典，key是md5，value是文件的位置
    """
    print('开始去重')

    md5List = {}
    for root, dirs, files in os.walk(folderPath):
        #文件列表按数字大小排序
        files.sort(key = lambda x: int(x[:-3]),reverse = True)
        for file in files:
            filePath = os.path.join(root, file)
            # print(filePath)
            file_md5 = file2MD5(filePath)

            md5List[file_md5] = filePath

    return md5List
#转换为文件的md5值
def file2MD5(filePath):
    with open(filePath, 'rb') as f:
        file_md5 = get_file_md5(f)
        # print(file_md5)
    return file_md5


def ergodicFolderGpt(js_folder_root):
    gpt_js_folder_path = os.path.join(js_folder_root, 'gpt')

    md5List = ergodicFolder(gpt_js_folder_path)
    # print(md5List)
    for key in md5List:
        # print(key,md5List[key])
        #获取路径中的文件夹地址os.path.dirname
        # save_folder = os.path.dirname(md5List[key]).replace('replaced','replaced_no_repeat')
        save_folder = os.path.dirname(md5List[key]).replace('gpt','gpt_no_repeat')
        createFolder(save_folder)
        copy(md5List[key],save_folder)

def ergodicFolderReplacedBlock(js_folder_root):
    replaced_block_js_folder_path = os.path.join(js_folder_root, 'replaced_block')

    md5List = ergodicFolder(replaced_block_js_folder_path)
    # print(md5List)
    for key in md5List:
        # print(key,md5List[key])
        #获取路径中的文件夹地址os.path.dirname
        save_folder = os.path.dirname(md5List[key]).replace('replaced_block','replaced_block_no_repeat')
        # save_folder = os.path.dirname(md5List[key]).replace('gpt','gpt_no_repeat')
        createFolder(save_folder)
        copy(md5List[key],save_folder)

def ergodicFolderReplacedVar(js_folder_root):
    replaced_block_js_folder_path = os.path.join(js_folder_root, 'replaced_var')

    md5List = ergodicFolder(replaced_block_js_folder_path)
    # print(md5List)
    for key in md5List:
        # print(key,md5List[key])
        #获取路径中的文件夹地址os.path.dirname
        save_folder = os.path.dirname(md5List[key]).replace('replaced_var','replaced_var_no_repeat')
        # save_folder = os.path.dirname(md5List[key]).replace('gpt','gpt_no_repeat')
        createFolder(save_folder)
        copy(md5List[key],save_folder)

#

# if __name__ == '__main__':
#     # md5List = ergodicFolder('../data/generated_data/original_samples/test_corpus_1000/no_hint/gpt')
#     md5List = ergodicFolder('../data/generated_data/original_samples/test_corpus_1000/no_hint/replaced')
#     # print(md5List)
#     for key in md5List:
#         # print(key,md5List[key])
#         #获取路径中的文件夹地址os.path.dirname
#         save_folder = os.path.dirname(md5List[key]).replace('replaced','replaced_no_repeat')
#         # save_folder = os.path.dirname(md5List[key]).replace('gpt','gpt_no_repeat')
#         createFolder(save_folder)
#         copy(md5List[key],save_folder)
#         # print(save_folder)
