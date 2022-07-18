# 从Table_Function读取方法，使用gpt变异，然后jshint语法检查,再写入Table_Function
import subprocess
import sys
import tempfile
import time
from multiprocessing.pool import ThreadPool
from pathlib import Path

import transformers

from utils.config import MODEL_PATH

BASE_DIR = str(Path(__file__).resolve().parent.parent)
sys.path.append(BASE_DIR)
import os
from workline.table_to_class.Table_Function_Class import Function_Object, write_to_Table_function, \
    makeFunctionListToWrite
from workline.mysql_tools.Table_Operation import Table_Function
from transformers import AutoTokenizer, AutoModelForCausalLM
from transformers import pipeline

# transformers.logging.set_verbosity_error()


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
            # 当function_replace_block不为None时保存到数据库
            if function_replace_block:
                functions_replace_block_set.add(function_replace_block)
    return functions_set, functions_replace_block_set


if __name__ == '__main__':
    table_Function = Table_Function()
    os.environ["CUDA_VISIBLE_DEVICES"] = "0"
    # 选择没有变异过的父用例进行扩充
    lis = table_Function.selectMutationTimesFromTableFunction(0, 0)
    # lis = table_Function.selectIdFromTableFunction(1)

    Function_Object_List = []
    # 将所有需要扩充的用例存在列表中
    for item in lis:
        function_object = Function_Object(item)
        Function_Object_List.append(function_object)

    print(f"存在需要扩充的数据{len(Function_Object_List)}条")
    if Function_Object_List:
        start = time.time()
        print(f'正在加载模型,大约需要5秒,请稍等')
        tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
        model = AutoModelForCausalLM.from_pretrained(MODEL_PATH)

        generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer, device=0, warnings=False)
        print("模型加载完成耗时：", int(time.time() - start), '秒')
        num_return_sequences = 50
        for item in Function_Object_List:
            print('*' * 30 + f'正对Function{item.Id}进行扩充' + '*' * 30)
            start_gen = time.time()
            # 传入一个用例，返回直接续写和续写替换的用例
            FunctionsSet, FunctionsReplaceBlockSet = enrich_one_function(item, num_return_sequences)
            AllFunctionsSet = FunctionsSet.union(FunctionsReplaceBlockSet)
            if len(item.prefix_list) != 0:
                print("生成不重复用例的数量为{},不重复率为{:.2%},生成速度{}个/秒".format(len(AllFunctionsSet),
                                                                   len(AllFunctionsSet) / (
                                                                           len(item.prefix_list) * num_return_sequences) / 2,
                                                                   int(len(item.prefix_list) * num_return_sequences / (
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
                print('扩充方法用时:', int(time.time() - start_gen), '秒')

                function_list_to_write1 = makeFunctionListToWrite(all_functions=FunctionsJshintPassSet,
                                                                  SourceFun_id=item.Id,
                                                                  mutation_type=1,
                                                                  mutation_times=0,
                                                                  Remark=None)

                function_list_to_write2 = makeFunctionListToWrite(all_functions=FunctionsReplaceBlockSetJshintPassSet,
                                                                  SourceFun_id=item.Id,
                                                                  mutation_type=2,
                                                                  mutation_times=0,
                                                                  Remark=None)

                # write_to_Table_function(function_list_to_write1, function_list_to_write2)
            else:
                print('前缀列表为空，无法扩充')
            # table_Function.updateMutationTimes(item.Mutation_Times + 1, item.Id)
