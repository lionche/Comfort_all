import os
import subprocess
import sys
import tempfile
import time
from multiprocessing.pool import ThreadPool
from pathlib import Path

from tqdm import tqdm
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
from workline.table_to_class.Table_Testcase_Class import Testcase_Object
from workline.mysql_tools.Table_Operation import Table_Testcase
from utils.config import MODEL_PATH

# 添加环境变量
os.environ['NODE_PATH'] = '/usr/lib/node_modules/'


def testJshintPassRate(function):
    def cmd_jshint(temp_file_path):
        """
        使用jshint对生成的function进行检查\n
        :param temp_file_path: 临时文件位置
        :return: 语法正确返回true,语法错误返回false
        """
        # cmd = ['timeout', '60s', 'jshint', temp_file_path]
        cmd = ['timeout', '10s', 'jshint', '-c', '/root/Comfort_all/data/.jshintrc', temp_file_path]

        if sys.platform.startswith('win'):  # 假如是windows
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        else:  # 假如是linux
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = p.communicate()
        # if stdout:
        #     print(stdout)
        # if stderr:
        #     print("error")
        #     print(stderr)

        if stdout.__len__() > 0:
            jshint_flag = False
        else:  # 通过了检查，此时 test_file_name中就是美化后的代码
            jshint_flag = True
            # print(f"{temp_file_path}right!")
        return jshint_flag

    with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
        temp_file_path = tmpfile.name
        # print(temp_file_name)  # /tmp/tmp73zl8gmn
        fine_code = 'var NISLFuzzingFunc = ' + function
        # fine_code = function

        tmpfile.write(fine_code.encode())
        tmpfile.seek(0)
        # tmpTxt = tmpfile.read().decode()
        # print(tmpTxt)
        result = cmd_jshint(temp_file_path)
        return result


def enrich_one_function(function_item, num_return_sequences=1):
    allGeneration = generator(function_item.prefix_list, num_return_sequences=num_return_sequences, max_length=512,
                              pad_token_id=tokenizer.eos_token_id, temperature=1, k=0, p=0.9)
    functions_set = set()
    functions_replace_block_set = set()

    for generationIdx, generationItem in enumerate(allGeneration):

        # print('-' * 30 + '前缀为前' + str(len(function_item.prefix_list[generationIdx].splitlines())) + '行' + '-' * 30)

        for idx, item in enumerate(generationItem):
            # print('-' * 30 + 'NO.' + str(idx + 1) + '-' * 30)
            # print(item['generated_text'])
            function_replace_block = function_item.gpt_replace_block(
                len(function_item.prefix_list[generationIdx].splitlines()), item['generated_text'])
            # print(function_replace_block)
            functions_set.add(item['generated_text'])
            if function_replace_block:
                functions_replace_block_set.add(function_replace_block)

    return functions_set, functions_replace_block_set


def functionJshintPassMutil(function):
    """
    对传入的列表中的方法进行语法过滤
    @param functions_set: 需要检查的set
    @return: 语法正确的set：functions_pass_set
    """
    global FunctionsJshintPassSet

    if testJshintPassRate(function):
        FunctionsJshintPassSet.add(function)


def functionReplaceBlockJshintPassMutil(function):
    """
    对传入的列表中的方法进行语法过滤
    @param functions_set: 需要检查的set
    @return: 语法正确的set：functions_pass_set
    """
    global FunctionsReplaceBlockSetJshintPassSet

    if testJshintPassRate(function):
        FunctionsReplaceBlockSetJshintPassSet.add(function)


if __name__ == '__main__':

    table_testcase = Table_Testcase()

    # list_unMutate = table_testcase.selectInterestingTimeFromTableTestcase(1)
    list_unMutate = table_testcase.selectIdFromTableTestcase(1)

    # pbar = tqdm(total=len(list_unMutate))
    testcase_object_list = []

    for unMutate_item in list_unMutate:
        testcase_object = Testcase_Object(unMutate_item)
        # 更新当前用例的mutation time+1
        testcase_object_list.append(testcase_object)
    print("一共有%d条需要变异的测试用例" % len(testcase_object_list))

    if testcase_object_list:
        useGptMutate = True
        if useGptMutate:
            start = time.time()
            print(f'正在加载模型,大约需要5秒,请稍等')
            tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
            model = AutoModelForCausalLM.from_pretrained(MODEL_PATH)
            generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer, device=0)
            print("模型加载完成：", time.time() - start)

        for item in testcase_object_list:
            # pbar.update(1)

            print('*' * 25 + f'变异testcase{item.Id}' + '*' * 25)

            # 规则变异
            print("正在进行人工规则替换")
            random_block_remove_pass, while_if_swap_pass, condition_code_add_pass, replaceOperator_pass, replace_similar_API_pass, replace_return_API_pass, proto_pollution_pass, property_modification_pass, hotspot_optimization_pass = item.mutation_method4()
            num = len(random_block_remove_pass) + len(while_if_swap_pass) + len(condition_code_add_pass) + len(
                replaceOperator_pass) + len(replace_similar_API_pass) + len(replace_return_API_pass) + len(
                proto_pollution_pass) + len(property_modification_pass) + len(hotspot_optimization_pass)
            print(f'规则变异出{num}个用例')

            # 生成变异
            if useGptMutate:
                num_return_sequences = 20

                start_gen = time.time()
                # 传入一个用例，返回直接续写和续写替换的用例
                FunctionsSet, FunctionsReplaceBlockSet = enrich_one_function(item.source_function_object,
                                                                             num_return_sequences)
                AllFunctionsSet = FunctionsSet.union(FunctionsReplaceBlockSet)

                print("生成不重复用例的数量为{},不重复率为{:.2%},生成速度{}个/秒".format(len(AllFunctionsSet),
                                                                   len(AllFunctionsSet) / (
                                                                           len(item.source_function_object.prefix_list) * num_return_sequences) / 2,
                                                                   int(len(AllFunctionsSet) / (
                                                                           time.time() - start_gen))))
                start_jshint = time.time()

                FunctionsJshintPassSet = set()
                FunctionsReplaceBlockSetJshintPassSet = set()

                pool = ThreadPool()
                pool.map(functionJshintPassMutil, FunctionsSet)
                pool.map(functionReplaceBlockJshintPassMutil, FunctionsReplaceBlockSet)
                pool.close()
                pool.join()

                print("直接续写语法通过率为{:.2%},续写替换语法通过率为{:.2%}，检查速度{}个/秒".format(
                    len(FunctionsJshintPassSet) / len(FunctionsSet),
                    len(FunctionsReplaceBlockSetJshintPassSet) / len(
                        FunctionsReplaceBlockSet),
                    int(len(AllFunctionsSet) / (
                            time.time() - start_gen))))
                all_functions_generated_testcases_pass, all_functions_replaced_generated_testcases_pass = item.mutation_method1_2(
                    FunctionsJshintPassSet, FunctionsReplaceBlockSetJshintPassSet)

                print(
                    f'将{len(all_functions_generated_testcases_pass)}个GPT续写用例，{len(all_functions_replaced_generated_testcases_pass)}个GPT续写替换用例存入数据库')

            table_testcase.updateMutationTimes(item.Mutation_times + 1, item.Id)

    # pbar.close()
