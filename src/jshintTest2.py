import os
import subprocess
import sys
#PATH=/root/.jsvu:/usr/local/cuda-11.4/bin:/root/.jsvu:/root/.nvm/versions/node/v14.17.6/bin:/root/miniconda3/envs/comfort/bin:/root/miniconda3/condabin:/usr/local/cuda-11.4/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
#NVM_BIN=/root/.nvm/versions/node/v14.17.6/bin;NODE_PATH=/root/.nvm/versions/node/v14.17.6/lib/node_modules:/root/.nvm/versions/node/v14.17.6/lib/node_modules:
from shutil import copyfile, copy


def jshint_checking(file_path):
    cmd = ['timeout', '60s', 'jshint', file_path]

    if sys.platform.startswith('win'):  # 假如是windows
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
    else:  # 假如是linux
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

    stdout, stderr = p.communicate()
    # if stdout:
    #     print(f"{file_path}语法出错")
    #     print(stdout)
    # if stderr:
    #     print("error")
    #     print(stderr)

    if stdout.__len__() > 0:
        jshint_flag = False
    else:  # 通过了检查，此时 test_file_name中就是美化后的代码
        jshint_flag = True
        # print(f"{file_path}right!")
    return jshint_flag

if __name__ == '__main__':

    # corpus_dir = '../data/generated_data/original_samples/hint/replace_hint/'
    corpus_dir = '../data/generated_data/original_samples/hint/55_js_function_hint/'

    total = 0

    for root, dirs, files in os.walk(corpus_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                total += 1

    i = 0
    jshint_pass = 0
    for root, dirs, files in os.walk(corpus_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js") and '/line_1/' in file_path:
            # if file_path.endswith(".js"):
                process = "\rprocessing: {current}/{total}".format(current=str(i + 1), total=total)
                # 可以刷新的打印
                sys.stdout.write(process)
                # coverage(report_dir, temp_dir, file_path)

                # print(file_path)
                if jshint_checking(file_path):
                    jshint_pass += 1
                    paste_path = file_path.replace('55_js_function_hint','55_js_function_hint_right')
                    # paste_path = file_path.replace('replace_hint','replace_hint_right')
                    if not os.path.exists(os.path.split(paste_path)[0]):
                        os.makedirs(os.path.split(paste_path)[0])
                    copy(file_path,paste_path)
                i += 1

    print('\n'+str(jshint_pass / total))