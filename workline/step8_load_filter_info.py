from pprint import pprint

import yaml

with open('/root/Comfort_all/workline/filter_info.yml', 'r', encoding='utf-8') as fr:
    filter_info = yaml.load(fr, Loader=yaml.SafeLoader)['returncode_type']
pprint(filter_info)
# [{'error_info': '1(0)2(0)3(0)4(0)5(0)6(0)7(0)8(0)9(0)',
#   'error_type': [{'Stderr': {'engine': 8,
#                              'info': 'warning: Direct call to eval(), but '
#                                      'lexical scope is not supported.'},
#                   'Stdout': None,
#                   'remark': 'hermes eval()传入字符串报错'},
#                  {'Stderr': {'engine': None, 'info': None},
#                   'Stdout': None,
#                   'remark': 'hermes eval()传入字符串报错'}],
#   'id': 1},
#  {'error_info': '1(1)2(3)3(0)4(3)5(1)6(-6)7(7)8(1)9(0)',
#   'error_type': [{'Stderr': {'engine': 8,
#                              'info': 'warning: Direct call to eval(), but '
#                                      'lexical scope is not supported.'},
#                   'Stdout': None,
#                   'remark': '实验'}],
#   'id': 2}]


