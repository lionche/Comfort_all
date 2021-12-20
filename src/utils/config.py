import argparse
import json
import os
import pathlib

generate_model_dir = '/root/project/COMFORT/src/generate_model/models'
generate_model_name = 'nisl_model'
#测试代码覆盖率
# class Hparams_Coverage:
#     parser = argparse.ArgumentParser()
#     #选择要测试的fuzzer,使用自带的测试库x
#     parser.add_argument('--fuzzer', type=str, default="comfort",
#                         help="which fuzzer to test, there are comfort, die, fuzzilli, montage, deepsmith, codealchemist")
#     #自定义测试库
#     #路径开于 /
#     # parser.add_argument('--coverage_files', type=str, default="/root/project/COMFORT/data/generated_data/complete_testcases/123",
#     # parser.add_argument('--coverage_files', type=str, default="/root/project/COMFORT/data/generated_data/original_samples/test_corpus_1000/no_hint/orginal",
#     parser.add_argument('--coverage_files', type=str, default="data/generated_data/original_samples/test_corpus_1000/hint/replaced_block_no_repeat_1",
#                         help='path to the directory of files that need to calculate coverage')
#
# class Hparams_Reduce:
#     parser = argparse.ArgumentParser()
#
#     parser.add_argument('--file_path', type=str, default=PROJECT_ABSOLUTE_PATH + "/data/testcases/testcase.js",
#                         help='path to the origin file')
#
#     parser.add_argument('--file_dir', type=str, default=PROJECT_ABSOLUTE_PATH + "/data/interesting_testcases",
#                         help='path to the directory of files that need to be reduced')