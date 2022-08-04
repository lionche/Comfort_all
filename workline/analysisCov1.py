# 单个用例角度  用例共生成多少子用例，多少个覆盖率提高了，分别提高了多少，父用例共提高了多少
# 变异方法角度 父用例使用的各种变异方法提高效果
import json

from workline.mysql_tools.Table_Operation import Table_Testcase
from workline.table_to_class.Table_Testcase_Class import Testcase_Object


def getPercent(json):
    # functions': {'count': 1601, 'instantiations': {'count': 1799,'lines': {'count': 49865,'regions': {'count': 23512,
    functions_percent = json['functions']['percent']
    instantiations_percent = json['instantiations']['percent']
    lines_percent = json['lines']['percent']
    regions_percent = json['regions']['percent']
    return {'functions_percent': functions_percent, 'instantiations_percent': instantiations_percent,
            'lines_percent': lines_percent, 'regions_percent': regions_percent}
    # return functions_percent,instantiations_percent,lines_percent,regions_percent


def getCoverageRateRaise(old_percent_cov, new_percent_cov):
    """
    对比新旧覆盖率的提高率
    @param old_percent_cov: 旧覆盖率
    @param new_percent_cov: 新覆盖率
    @return: 提高率
    """
    if old_percent_cov == 0: return 0
    coverageRateRaise = (new_percent_cov - old_percent_cov) / old_percent_cov
    return coverageRateRaise


def analysisCov(json_info):
    json_str = json.loads(json_info)
    # print(json_str['data'][0]['files'])
    return (json_str['data'][0]['files']), json_str['data'][0]['totals']
    # print(json_str['data'][0]['totals'])


id = 202
table_Testcases = Table_Testcase()


def TestcaseTotalCovPercentRaiseRate(id):
    testcase_lis = table_Testcases.selectIdFromTableTestcase(id)
    testcase = Testcase_Object(testcase_lis[0])
    Engine_coverage = analysisCov(testcase.Engine_coverage)[1]
    Engine_coverage_integration_all = analysisCov(testcase.Engine_coverage_integration_all)[1]
    # print(Engine_coverage)
    # print(Engine_coverage_integration_all)
    Engine_coverage_percent = getPercent(Engine_coverage)
    # print(Engine_coverage_percent)
    Engine_coverage_integration_all_percent = getPercent(Engine_coverage_integration_all)
    # print(Engine_coverage_integration_all_percent)

    raise_rate_dic = {}
    type_cov_dic = {}

    for key in Engine_coverage_percent:
        cov_dic = {}

        old_cov = Engine_coverage_percent[key]
        new_cov = Engine_coverage_integration_all_percent[key]
        raiseRate = getCoverageRateRaise(old_cov, new_cov)
        # print(
        #     f'{key}占比从{Engine_coverage_percent[key]}提高到{Engine_coverage_integration_all_percent[key]},提高了{raiseRate * 100}%')

        # print('总%s从%.2f%%提高到%.2f%%,提高了%.2f%%' % (
        #     key, old_cov, new_cov, raiseRate * 100))

        cov_dic['old_cov'] = old_cov
        cov_dic['new_cov'] = new_cov
        cov_dic['raiseRate'] = raiseRate
        type_cov_dic[key] = cov_dic
        raise_rate_dic['total'] = type_cov_dic
    # print(raise_rate_dic)
    return raise_rate_dic


def TestcaseFilesCovPercentRaiseRate(id):
    testcase_lis = table_Testcases.selectIdFromTableTestcase(id)
    testcase = Testcase_Object(testcase_lis[0])
    Engine_coverage = analysisCov(testcase.Engine_coverage)[0]

    Engine_coverage_integration_all = analysisCov(testcase.Engine_coverage_integration_all)[0]
    Engine_coverage_percent_dic = saveFilesPercent2Dic(Engine_coverage)
    Engine_coverage_integration_all_percent_dic = saveFilesPercent2Dic(Engine_coverage_integration_all)
    # print(Engine_coverage_percent_dic)
    # print(Engine_coverage_integration_all_percent_dic)

    raise_rate_dic = {}
    for file_key in Engine_coverage_percent_dic:
        type_cov_dic = {}
        for percent_key in Engine_coverage_percent_dic[file_key]:
            cov_dic = {}

            # print(Engine_coverage_percent_dic[file_key][percent_key])
            # print(Engine_coverage_integration_all_percent_dic[file_key][percent_key])

            old_cov = Engine_coverage_percent_dic[file_key][percent_key]
            new_cov = Engine_coverage_integration_all_percent_dic[file_key][percent_key]
            raiseRate = getCoverageRateRaise(old_cov, new_cov)

            cov_dic['old_cov'] = old_cov
            cov_dic['new_cov'] = new_cov
            cov_dic['raiseRate'] = raiseRate
            type_cov_dic[percent_key] = cov_dic
        raise_rate_dic[file_key] = type_cov_dic

        # cov_dic[percent_key] = raiseRate

        # print(file_cov_dic)
        #
        # print('%s文件的%s从%.2f%%提高到%.2f%%,提高了%.2f%%' % (
        #     file_key[8:], percent_key, old_cov,
        #     new_cov, raiseRate * 100))
        # 不显示占比本来就为0的文件
        # if old_cov and new_cov:
        #     # 不显示覆盖率没提升的文件
        #     if raiseRate:
        #         print('%s文件的%s从%.2f%%提高到%.2f%%,提高了%.2f%%' % (
        #             file_key[8:], percent_key, old_cov,
        #             new_cov, raiseRate * 100))

        # raise_rate_dic[file_key] = file_cov_dic

    return raise_rate_dic


def saveFilesPercent2Dic(Engine_coverage):
    files_percent = {}
    for item in Engine_coverage:
        filename = item['filename']
        percentRate = getPercent(item['summary'])
        # print(filename)
        # print(percentRate)
        files_percent[filename] = percentRate
    return files_percent


def printCovByRaise(raise_rate_dic):
    # print(raise_rate_dic)
    for file_key in raise_rate_dic:
        # print(file_key)
        if raise_rate_dic[file_key]['functions_percent']['old_cov'] and raise_rate_dic[file_key]['functions_percent']['new_cov']:
            print("-" * 30 + f"{file_key}" + "-" * 30)
            for type_key in raise_rate_dic[file_key]:
                print('%s从%.2f%%提高到%.2f%%,提高了%.2f%%' % (
                    type_key, raise_rate_dic[file_key][type_key]['old_cov'],
                    raise_rate_dic[file_key][type_key]['new_cov'],
                    raise_rate_dic[file_key][type_key]['raiseRate'] * 100))


print("-" * 30 + f"用例{id}" + "-" * 30)

total_raise_rate_dic = TestcaseTotalCovPercentRaiseRate(id)
file_raise_rate_dic = TestcaseFilesCovPercentRaiseRate(id)

printCovByRaise(total_raise_rate_dic)
printCovByRaise(file_raise_rate_dic)
