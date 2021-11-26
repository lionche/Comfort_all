import os
# from utils.config import Hparams_Mutation

# 环境变量/root/project/COMFORT
from utils.utils import readFileAll
from testcase_mutation.mutation import Mutator


# def setdir(filepath):
#     if not os.path.exists(filepath):
#         os.mkdir(filepath)
#     else:
#         shutil.rmtree(filepath)
#         os.mkdir(filepath)


def save_files_from_file(file_path):
    content = readFileAll(file_path)

    saved_dir, name = os.path.split(file_path)

    mutator = Mutator()
    try:
        testcase_list = mutator.mutate(content)

        if testcase_list:

            print(f"The original testcase is:")
            print(content)

            jsname = name.split('.')[0] + '_mutated'
            saved_dir = saved_dir.replace('hint', 'mutation')
            saved_dir = os.path.join(saved_dir, jsname)
            if not os.path.exists(saved_dir):
                os.makedirs(saved_dir)

            for idx, testcase in enumerate(testcase_list):
                print('=' * 50)
                print(testcase)
                mutation_file = os.path.join(saved_dir, str(idx) + ".js")
                with open(mutation_file, "w", encoding='utf-8') as f:
                    f.write(testcase)
        else:
            print("This test case fails to be mutated as it does not contain any API.")

    except Exception as e:
        pass


def mutation_hint_testcases(ROOT):
    gpt_js_folder_path = os.path.join(ROOT, 'hint','gpt_no_repeat')
    block_replaced_js_folder_path = os.path.join(ROOT, 'hint','replaced_block_no_repeat')
    var_replaced_js_folder_path = os.path.join(ROOT, 'hint','replaced_var_no_repeat')
    orginal_js_folder_path = os.path.join(ROOT, 'hint','orginal')
    readFolder(gpt_js_folder_path)
    readFolder(block_replaced_js_folder_path)
    # readFolder(var_replaced_js_folder_path)
    # readFolder(orginal_js_folder_path)


def readFolder(dir):
    for root, dirs, files in os.walk(dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith('.js'):
                # print(code)
                save_files_from_file(file_path)


# if __name__ == "__main__":
    # mutation_hint_testcases('data/generated_data/original_samples/test_corpus_1000/hint')
    # file_path = '/root/project/COMFORT/data/generated_data/original_samples/test_corpus_1000/hint/orginal/100.js'
    # 需要传入绝对路径

    # mutation_result = save_files_from_file(file_path)
    # if mutation_result:
    #     print('=' * 50)
    #     print(f"The mutated results are stored in.")
    # else:
    #     print("This test case fails to be mutated as it does not contain any API.")
