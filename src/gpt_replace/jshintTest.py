import os
import subprocess
import sys
import argparse

# PATH=/root/.jsvu:/usr/local/cuda-11.4/bin:/root/.jsvu:/root/.nvm/versions/node/v14.17.6/bin:/root/miniconda3/envs/comfort/bin:/root/miniconda3/condabin:/usr/local/cuda-11.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
# NVM_BIN=/root/.nvm/versions/node/v14.17.6/bin
# NODE_PATH=/root/.nvm/versions/node/v14.17.6/lib/node_modules:/root/.nvm/versions/node/v14.17.6/lib/node_modules:
import tempfile
from shutil import copyfile, copy

# 保证/tmp目录下有配置文件
from utils import readFileAll


def jshint_checking(file_path,type):

    if type == 'no_hint':
        code = readFileAll(file_path)

        # 通过with语句创建临时文件，with会自动关闭临时文件
        with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
            temp_file_name = tmpfile.name
            # print(temp_file_name)  # /tmp/tmp73zl8gmn
            fine_code = 'var NISLFuzzingFunc = ' + code + ';'
            tmpfile.write(fine_code.encode())
            tmpfile.seek(0)
            tmpTxt = tmpfile.read().decode()
            # print(tmpTxt)
            result = cmd_jshint(temp_file_name,file_path)
        return result
    if type == 'hint':
        result = cmd_jshint(file_path, file_path)
        return result


def cmd_jshint(temp_file_name,file_path):
    cmd = ['timeout', '60s', 'jshint', temp_file_name]
    if sys.platform.startswith('win'):  # 假如是windows
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
    else:  # 假如是linux
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = p.communicate()
    if stdout:
        print(f"{file_path}语法出错")
        print(stdout)
    if stderr:
        print("error")
        print(stderr)

    if stdout.__len__() > 0:
        jshint_flag = False
    else:  # 通过了检查，此时 test_file_name中就是美化后的代码
        jshint_flag = True
        # print(f"{file_path}right!")
    return jshint_flag

def jsjintPass(js_folder_root,type_dir,type):
    print(f'jsjint检测{type_dir}')
    type_js_folder_path = os.path.join(js_folder_root, type_dir)

    total = 0

    for root, dirs, files in os.walk(type_js_folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                total += 1

    i = 0
    jshint_pass = 0
    for root, dirs, files in os.walk(type_js_folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            # if file_path.endswith(".js") and '/line_1/' in file_path:
            if file_path.endswith(".js"):
                process = "\rprocessing: {current}/{total}".format(current=str(i + 1), total=total)
                # 可以刷新的打印
                sys.stdout.write(process)
                # coverage(report_dir, temp_dir, file_path)

                # print(file_path)
                if jshint_checking(file_path,type):
                    jshint_pass += 1

                else:
                    pass
                    # os.remove(file_path)

                    # 复制通过jshint检测的正确的js文件
                    # paste_path = file_path.replace('55_js_function_hint','55_js_function_hint_right')
                    # # paste_path = file_path.replace('replace_hint','replace_hint_right')
                    # if not os.path.exists(os.path.split(paste_path)[0]):
                    #     os.makedirs(os.path.split(paste_path)[0])
                    # copy(file_path,paste_path)

                i += 1

    print(':\n准确率' + str(jshint_pass / total))

if __name__ == '__main__':
    hint_js_folder_root = '../../data/generated_data/original_samples/test_corpus_1000/no_hint/'
    jsjintPass(hint_js_folder_root, 'gpt_no_repeat','no_hint')
