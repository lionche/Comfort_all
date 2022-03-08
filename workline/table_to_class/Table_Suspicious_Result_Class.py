from pprint import pprint

from src.studyMysql.Table_Operation import Table_Suspicious_Result, Table_Result
from workline.table_to_class.Table_Result_Class import Result_Object

import yaml

with open('/root/Comfort_all/workline/filter_info.yml', 'r', encoding='utf-8') as fr:
    filter_info = yaml.load(fr, Loader=yaml.SafeLoader)['returncode_type']


class Suspicious_Result_Object(object):
    def __init__(self, Suspicious_Result_Item):
        self.Id = Suspicious_Result_Item[0]
        self.Error_type: str = Suspicious_Result_Item[1]
        self.Testcase_id = Suspicious_Result_Item[2]
        self.Function_id = Suspicious_Result_Item[3]
        self.Testbed_id = Suspicious_Result_Item[4]
        self.Remark = Suspicious_Result_Item[5]
        self.Is_filtered = Suspicious_Result_Item[6]
        self.ResultList, self.Returncode = self.getResultListAndReturnCode()

    def getResultListAndReturnCode(self):
        """
        通过testcases id反查
        :return:
        """
        table_Result = Table_Result()
        Result_list = table_Result.selectTestcasesFromTableResult(self.Testcase_id)
        result_object_list = []
        returncode = ''
        for item in Result_list:
            result_object = Result_Object(item)
            returncode += str(result_object.Testbed_Id)
            returncode += f'({result_object.Returncode})'
            result_object_list.append(result_object)
        return result_object_list, returncode

    def extractYaml1(self):
        """
        通过return code来检索文档
        :return: 找到的话返回当前return code类，进行下一步检索
        找不到就返回None
        """
        for returncode_type in filter_info:
            if returncode_type['returncode'] == self.Returncode:
                return returncode_type
        else:
            return None

    def extractYaml2(self, error_info_list):
        """
        检索error info，提取出stdout，和stderr。
        :return:返回两个list，里面分别是stdout和stderr
        """
        flag = True

        for error_info_item in error_info_list:
            stdoutList = error_info_item['Stdout']
            stderrList = error_info_item['Stderr']
            # print(stdoutList)
            # print(stderrList)
            if stdoutList is not None:
                flag = self.compareInfo('Stdout', stdoutList)
            if stderrList is not None:
                flag = self.compareInfo('Stderr', stderrList)
            if flag:
                return flag, error_info_item
        return flag, error_info_item

    def analysis(self):
        Returncode_block = self.extractYaml1()
        if Returncode_block:
            # print(Returncode_block['error_info'])
            ifAnalysisSuccess, error_info_item = self.extractYaml2(Returncode_block['error_info'])
            if (ifAnalysisSuccess):
                print('成果匹配，remark-id为',error_info_item['remark-id'],'错误原因是',error_info_item['remark'])
            else:
                print('只匹配到return code',self.Returncode)
                # todo 进行人工分析
        else:
            print('没有匹配到return code')
            # todo 进行人工分析

    def judgeInfo(self, stdout: str, info: str):
        if info in stdout:
            return True
        else:
            return False

    def compareInfo(self, type, stdList):
        for std in stdList:
            # print('engine:', std['engine'])
                # print('info:', std['info'])
                if type == 'Stdout':
                    if self.ResultList[std['engine'] - 1].Testbed_Id == std['engine']:
                        # print("Stdout:", self.ResultList[std['engine'] - 1].Stdout)
                        if self.judgeInfo(self.ResultList[std['engine'] - 1].Stdout, std['info']):
                            pass
                            # print('合格')
                        else:
                            # print('不合格')
                            return False
                            # break

                if type == 'Stderr':
                    if self.ResultList[std['engine'] - 1].Testbed_Id == std['engine']:
                        # print('stderr:', self.ResultList[std['engine'] - 1].Stderr)
                        if self.judgeInfo(self.ResultList[std['engine'] - 1].Stderr, std['info']):
                            pass
                            # print('合格')
                        else:
                            # print('不合格')
                            return False
                            # break
        return True

        # if type == 'stdout':
