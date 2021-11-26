import os
from generate_model.callable_processor import CallableProcessor
from utils.utils import readFileAll

def assemble_hint_testcases(ROOT):
    gpt_js_folder_path = os.path.join(ROOT, 'no_hint','gpt_no_repeat')
    block_replaced_js_folder_path = os.path.join(ROOT, 'no_hint','replaced_block_no_repeat')
    var_replaced_js_folder_path = os.path.join(ROOT, 'no_hint','replaced_var_no_repeat')
    orginal_js_folder_path = os.path.join(ROOT, 'no_hint','orginal')

    readFolder(gpt_js_folder_path)
    readFolder(block_replaced_js_folder_path)
    readFolder(var_replaced_js_folder_path)
    readFolder(orginal_js_folder_path)

def readFolder(dir):
    for root, dirs, files in os.walk(dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith('.js'):
                path, name = os.path.split(file_path)
                code = readFileAll(file_path)
                # print(code)
                testcase_assemble(code, path, name)


def testcase_assemble(function, saved_dir, name):
    callable_processor = CallableProcessor()
    try:
        code_hint = callable_processor.get_self_calling(function)
        saved_dir = saved_dir.replace('no_hint', 'hint')
        if not os.path.exists(saved_dir):
            os.makedirs(saved_dir)
        with open(os.path.join(saved_dir, name), 'w', encoding='utf-8') as f:
            f.write(code_hint)
    except:
        pass

# testcase_assemble(functions, '../data/generated_data/complete_testcases/123')
# if __name__ == '__main__':
#     assemble_assemble('../data/generated_data/original_samples/test_corpus_10/no_hint')
