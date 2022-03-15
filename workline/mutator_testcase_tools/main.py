import subprocess
import os
from tqdm import tqdm

def Testcase_Mutation(file_name):
    random_block_remove = []
    while_if_swap = []
    condition_code_add = []
    replaceOperator = []
    replace_similar_API = []
    replace_return_API = []
    proto_pollution = []
    property_modification = []
    hotspot_optimization = []
    cmd1 = ['node', '/root/yw/src/testcase_mutation/universal_mutation.js', '-f', file_name]
    pro1 = subprocess.Popen(cmd1, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, universal_newlines=True)
    stdout1, stderr1 = pro1.communicate()
    result1 = stdout1.split("------------------------------")
    for i in result1:
        i = i.strip()
        if (i != ""):
            split_i = i.split("\n")
            if (split_i[-1] == "random_block_remove" and (i not in random_block_remove)):
                random_block_remove.append(i[:i.rfind('\n')])
            elif(split_i[-1] == "while_if_swap" and (i not in while_if_swap)):
                while_if_swap.append(i[:i.rfind('\n')])
            elif (split_i[-1] == "condition_code_add" and (i not in condition_code_add)):
                condition_code_add.append(i[:i.rfind('\n')])
            elif (split_i[-1] == "replaceOperator" and (i not in replaceOperator)):
                replaceOperator.append(i[:i.rfind('\n')])

    cmd2 = ['node', '/root/yw/src/testcase_mutation/special_mutation.js', '-f', file_name]
    pro2 = subprocess.Popen(cmd2, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE, universal_newlines=True)
    stdout2, stderr2 = pro2.communicate()
    result2 = stdout2.split("------------------------------")
    for j in result2:
        j = j.strip()
        if (j != ""):
            split_j = j.split("\n")
            if (split_j[-1] == "replace_similar_API" and (j not in replace_similar_API)):
                replace_similar_API.append(j[:j.rfind('\n')])
            elif (split_j[-1] == "replace_return_API" and (j not in replace_return_API)):
                replace_return_API.append(j[:j.rfind('\n')])
            elif (split_j[-1] == "proto_pollution" and (j not in proto_pollution)):
                proto_pollution.append(j[:j.rfind('\n')])
            elif (split_j[-1] == "property_modification" and (j not in property_modification)):
                property_modification.append(j[:j.rfind('\n')])
            elif (split_j[-1] == "hotspot_optimization" and (j not in hotspot_optimization)):
                hotspot_optimization.append(j[:j.rfind('\n')])
    # 返回 随机代码块删除， While与If代码块互换， 条件代码块包裹， 操作符替换， 语义相近的API替换， 返回值相同的API替换， 原型链污染， 属性篡改， 热点函数优化
    return random_block_remove, while_if_swap, condition_code_add, replaceOperator, replace_similar_API, replace_return_API, proto_pollution, property_modification, hotspot_optimization


if __name__ == "__main__":
    # file_dir = "/root/yw/src/testcase_mutation/js_file_1000"
    # log_file = "/root/yw/src/testcase_mutation/log.txt"
    # count(file_dir, log_file)
    file_name = "/root/yw/src/testcase_mutation/testcase/js_file_1000/13105.js"
    result = Testcase_Mutation(file_name)
    # print(result)
