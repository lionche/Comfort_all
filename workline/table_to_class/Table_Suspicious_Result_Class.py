from pprint import pprint

from src.studyMysql.Table_Operation import Table_Suspicious_Result, Table_Result
from workline.table_to_class.Table_Result_Class import Result_Object


class Suspicious_Result_Object(object):
    def __init__(self, Suspicious_Result_Item):
        self.Id = Suspicious_Result_Item[0]
        self.Error_type: str = Suspicious_Result_Item[1]
        self.Testcase_id = Suspicious_Result_Item[2]
        self.Function_id = Suspicious_Result_Item[3]
        self.Testbed_id = Suspicious_Result_Item[4]
        self.Remark = Suspicious_Result_Item[5]
        self.Is_filtered = Suspicious_Result_Item[6]

    def analysis(self):
        """
        自动分析用例
        :return:
        """
        table_Result = Table_Result()
        Result_list = table_Result.selectTestcasesFromTableResult(self.Testcase_id)
        error_info = ''
        for item in Result_list:
            Testcase_Id: str = item[1]
            Testbed_Id = item[2]
            Returncode = item[3]
            Stdout = item[4]
            Stderr = item[5]

            # print(f'用例id{Testcase_Id},引擎编号{Testbed_Id},返回值{Returncode}')
            error_info += str(Testbed_Id)
            error_info += f'({str(Returncode)})'

        import yaml

        with open('/root/Comfort_all/workline/filter_info.yml', 'r', encoding='utf-8') as fr:
            filter_info = yaml.load(fr, Loader=yaml.SafeLoader)['returncode_type']

        for returncode_type in filter_info:
            # 匹配引擎报错信息
            if returncode_type['error_info'] == error_info:
                # pprint(returncode_type)
                # print(f"{self.Testcase_id}错误代号为{returncode_type['error_info']}")

                for items in returncode_type['error_type']:
                    try:
                        stdout_list = items['Stdout']

                        if stdout_list is not None:
                            for stdout in stdout_list:
                                self.judgeInfo(stdout, 'stdout')


                    except:
                        pass

                    try:
                        stderr_list = items['Stderr']
                        if stderr_list is not None:
                            print(stderr_list)
                    except:
                        pass
                    # print(items['Stderr'])

                # for testcase in testcases:
                #     result = Result_Object(testcase)
                #     result.Testbed_Id

    #         #匹配引擎报错信息
    #         if returncode_type['error_info'] == error_info:
    #             pprint(returncode_type)
    #             print(testcase_ids)
    #             for testcase_id in testcase_ids:
    #                 print(f"{testcase_id}错误代号为{returncode_type['error_info']}")
    #             testcase = table_Result.selectTestcasesFromTableResult(testcase_id)

    def judgeInfo(self, stdout, type):

        if type == 'stdout':
            print(stdout['engine'], stdout['info'])

            for testcase in testcases:
                result = Result_Object(testcase)
                if result.Testbed_Id == stdout['engine'] and stdout['info'] in result.Stdout:
                    print("yes")

        if type == 'stderr':
            pass


