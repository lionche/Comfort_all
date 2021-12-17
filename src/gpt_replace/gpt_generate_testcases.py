# 结合2种变异方法，

# 使用变异方法1，前缀保留所有的变量
# 使用变异方法2，当含有变量时，只替换变量。

# 只需要传入一个包含原用例的目录就行。
import os

from jshintTest import jsjintPass
from replaceBlockCode import replacedBlockFolder
from replaceVarCode import replaceVar
from findRepeat import ergodicFolderGpt, ergodicFolderReplacedBlock, ergodicFolderReplacedVar
from gpt_generator_opration import generateJs1

# PROJECT_ABSOLUTE_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# PROJECT_ABSOLUTE_PATH = PROJECT_ABSOLUTE_PATH[:-4]
# os.chdir(PROJECT_ABSOLUTE_PATH)


js_folder_root = '../../data/generated_data/original_samples/test_corpus_10/no_hint/'

# 生成的保存的目录

# block_replaced_js_folder_path = os.path.join(js_folder_root, 'block_replaced')

# 变异方法一
# 选择前缀来生成
generateJs1(js_folder_root)
# # 对生成的文件去重，将不重复的文件复制到另一个文件夹中

ergodicFolderGpt(js_folder_root)
# # jshint语法检测，错误的删除
jsjintPass(js_folder_root, 'gpt_no_repeat')
# # 替换代码块
replacedBlockFolder(js_folder_root)
# # 对生成的文件去重，将不重复的文件复制到另一个文件夹中
ergodicFolderReplacedBlock(js_folder_root)
# # jshint语法检测，错误的删除
jsjintPass(js_folder_root, 'replaced_block_no_repeat')

# 变异方法二
# 只替换变量

replaceVar(js_folder_root)
# # 对生成的文件去重，将不重复的文件复制到另一个文件夹中
ergodicFolderReplacedVar(js_folder_root)
# # jshint语法检测，错误的删除
jsjintPass(js_folder_root, 'replaced_var_no_repeat')




