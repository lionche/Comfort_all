#找到代码中重复的部分，然后删掉重复的文件
import os
import hashlib

#md5函数
from shutil import copy

from src.utils.utils import createFolder


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

if __name__ == '__main__':
    md5List = ergodicFolder('../data/generated_data/original_samples/test_corpus_100/no_hint/gpt')
    # print(md5List)
    for key in md5List:
        # print(key,md5List[key])
        #获取路径中的文件夹地址os.path.dirname
        save_folder = os.path.dirname(md5List[key]).replace('gpt','gpt_no_repeat')
        createFolder(save_folder)
        copy(md5List[key],save_folder)
        # print(save_folder)
