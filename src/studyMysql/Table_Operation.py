import os

from src.studyMysql.db_operation_base import DataBaseHandle


# 对表Table_Function进行操作
class Table_Function(object):
    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    # 单行查询
    def selectOneFromTableFunction(self, id):
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = 'select * from Table_Function where id=%s'
        prames = (id)
        return self.__table.selectOne(sql, prames)

    def selectSourceIdFromTableFunction(self, SourceFun_id):
        """
        条件查询全部符合的数据\n
        查询初始的用例即SourceFun_id==0用例\n
        :param SourceFun_id: 父用例id
        :return:所有符合条件的数据的List
        """
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = f'select * from Table_Function where SourceFun_id={SourceFun_id}'
        return self.__table.selectall(sql)

        # return self.__table.selectOne(sql, prames)

    # ???从指定id开始查询Number条数据
    def selectFromTableFunctionForNumber(self, id, number):
        sql = 'select * from Table_Function where id=%s limit %s'
        prames = (id, number)
        return self.__table.selectmany(sql, prames)

    # 全部查询
    def selectAllFromTableFunction(self):
        sql = 'select * from Table_Function'
        return self.__table.selectall(sql)

    # 插入单行数据
    def insertDataToTableFunction(self, Function_Content, SourceFun_Id, Mutation_Method, Remark):
        """插入单行数据
        :param Id: 自增的主键id
        :param Function_Content: 方法内容
        :param SourceFun_Id: 源方法id
        :param Mutation_Method: 变异方法的序号，没有变异是0
        :param Remark:
        :return:
        """
        sql = 'INSERT INTO Table_Function(Function_content,SourceFun_id,Mutation_method,Remark) values(%s,%s,%s,%s)'
        prames = (Function_Content, SourceFun_Id, Mutation_Method, Remark)
        return self.__table.insert(sql, prames)

    # 插入多条数据,可避免数据库多次打开关闭。
    '''
    lis为一个数据列表，形式如：
    lis = [[id,catid,typeid,title],[id2,catid2,typeid2,title2]]
    '''

    def insertManyDataToTableFunction(self, lis):
        sql = 'insert into Table_Function(Function_content,SourceFun_id,Mutation_method,Remark) values(%s,%s,%s,%s)'
        return self.__table.insertMany(sql, lis)

    # 删除数据
    def deleteFromTableFunction(self, id):
        sql = 'delete from Table_Function where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    # 删除全部
    def deleteAllFromTableFunction(self):
        sql = 'delete from Table_Function'
        return self.__table.deleteAll(sql)

    # 更改数据
    def updateDataBaseHandle(self, id, Function_content):
        sql = 'update Table_Function set Function_content= %s where id = %s'
        prames = (Function_content, id)
        return self.__table.update(sql, prames)


# 对表Table_Testcase进行操作
class Table_Testcase(object):
    '''
    Id：主键，自增\n
    Testcase_context：用例内容\n
    SourceFun_id：源方法id\n
    SourceTestcase_id：源用例id，0代表直接从方法组装的用例\n
    Mutation_method:0代表没有变异\n
    Remark
    '''

    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    # 单行查询
    def selectOneFromTableTestcase(self, id):
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = 'select * from Table_Testcase where id=%s'
        prames = (id)
        return self.__table.selectOne(sql, prames)

    def selectIdFromTableTestcase(self, id):
        """
        条件查询全部符合的数据\n
        查询初始的用例即SourceFun_id==0用例\n
        :param SourceFun_id: 父用例id
        :return:所有符合条件的数据的List
        """
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = f'select * from Table_Testcase where Id={id}'
        return self.__table.selectall(sql)

    def selectFuzzingTimeFromTableTestcase(self, Fuzzing_times):
        """
        条件查询全部符合的数据\n
        查询初始的用例即SourceFun_id==0用例\n
        :param SourceFun_id: 父用例id
        :return:所有符合条件的数据的List
        """
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = f'select * from Table_Testcase where Fuzzing_times={Fuzzing_times}'
        return self.__table.selectall(sql)

        # return self.__table.selectOne(sql, prames)

    # ???从指定id开始查询Number条数据
    def selectFromTableTestcaseForNumber(self, id, number):
        sql = 'select * from Table_Testcase where id=%s limit %s'
        prames = (id, number)
        return self.__table.selectmany(sql, prames)

    # 全部查询
    def selectAllFromTableTestcase(self):
        sql = 'select * from Table_Testcase'
        return self.__table.selectall(sql)

    # 插入单行数据
    def insertDataToTableTestcase(self, Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,
                                  Mutation_method, Mutation_times, Interesting_times, Probability, Remark):
        """插入单行数据
        :param Id: 自增的主键id
        :param Testcase_context: 用例内容
        :param SourceFun_Id: 源方法id
        :param SourceTestcase_id: 原用例id
        :param Mutation_Method: 变异用例的序号，没有变异是0
        :param Remark:
        :return:
        """
        sql = 'INSERT INTO Table_Testcase(Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,Mutation_method ,Mutation_times,Interesting_times,Probability,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        prames = (Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times, Mutation_method, Mutation_times,
                  Interesting_times, Probability, Remark)
        return self.__table.insert(sql, prames)

    # 插入多条数据,可避免数据库多次打开关闭。
    '''
    lis为一个数据列表，形式如：
    lis = [[id,catid,typeid,title],[id2,catid2,typeid2,title2]]
    '''

    def insertManyDataToTableTestcase(self, lis):
        sql = 'INSERT INTO Table_Testcase(Testcase_context, SourceFun_id, SourceTestcase_id, Fuzzing_times,Mutation_method ,Mutation_times,Interesting_times,Probability,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        return self.__table.insertMany(sql, lis)

    # 删除数据
    def deleteFromTableTestcase(self, id):
        sql = 'delete from Table_Testcase where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    # 删除全部
    def deleteAllFromTableTestcase(self):
        sql = 'delete from Table_Testcase'
        return self.__table.deleteAll(sql)

    # 更改数据
    def updateDataBaseHandle(self, id, Function_content):
        sql = 'update Table_Testcase set Testcase_context= %s where id = %s'
        prames = (Function_content, id)
        return self.__table.update(sql, prames)

    def updateFuzzingTimesInterestintTimes(self, Fuzzing_times, Interesting_times, id):
        sql = 'update Table_Testcase set Fuzzing_times= %s ,Interesting_times = %s where id = %s'
        prames = (Fuzzing_times, Interesting_times, id)
        return self.__table.update(sql, prames)


# Table_Result
class Table_Result(object):
    '''
    Id：主键，自增\n
    Testcase_Id：用例id
    Testbed_Id：js引擎编号
    Returncode：返回值
    Stdout：输出
    Stderr：错误输出
    duration_ms：耗时
    seed_coverage：种子覆盖率
    engine_coverage：引擎覆盖率
    Remark：
    '''

    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    # 单行查询
    def selectOneFromTableResult(self, id):
        # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
        sql = 'select * from Table_Result where id=%s'
        prames = (id)
        return self.__table.selectOne(sql, prames)

    # def selectFuzzingTimeFromTableResult(self, Fuzzing_times):
    #     """
    #     条件查询全部符合的数据\n
    #     查询初始的用例即SourceFun_id==0用例\n
    #     :param SourceFun_id: 父用例id
    #     :return:所有符合条件的数据的List
    #     """
    #     # 注意在数据库操作时无 %d ,全部字段都用%s来匹配，无论哪种数据类型。
    #     sql = f'select * from Table_Result where Fuzzing_times={Fuzzing_times}'
    #     return self.__table.selectall(sql)

    # return self.__table.selectOne(sql, prames)

    # ???从指定id开始查询Number条数据
    # def selectFromTableResultForNumber(self, id, number):
    #     sql = 'select * from Table_Result where id=%s limit %s'
    #     prames = (id, number)
    #     return self.__table.selectmany(sql, prames)

    # 全部查询
    def selectAllFromTableResult(self):
        sql = 'select * from Table_Result'
        return self.__table.selectall(sql)

    # 插入单行数据

    def insertDataToTableResult(self, Testcase_Id, Testbed_Id, Returncode, Stdout, Stderr, duration_ms, seed_coverage,
                                engine_coverage, Remark):
        """插入单行数据
        :param Id: 自增的主键id
        :param Testcase_context: 用例内容
        :param SourceFun_Id: 源方法id
        :param SourceTestcase_id: 原用例id
        :param Mutation_Method: 变异用例的序号，没有变异是0
        :param Remark:
        :return:
        """
        sql = 'INSERT INTO Table_Result(Testcase_Id, Testbed_Id, Returncode, Stdout,Stderr ,duration_ms,seed_coverage,engine_coverage,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        prames = (
            Testcase_Id, Testbed_Id, Returncode, Stdout, Stderr, duration_ms, seed_coverage, engine_coverage, Remark)
        return self.__table.insert(sql, prames)

    # 插入多条数据,可避免数据库多次打开关闭。
    '''
    lis为一个数据列表，形式如：
    lis = [[id,catid,typeid,title],[id2,catid2,typeid2,title2]]
    '''

    def insertManyDataToTableResult(self, lis):
        sql = 'INSERT INTO Table_Result(Testcase_Id, Testbed_Id, Returncode, Stdout,Stderr ,duration_ms,seed_coverage,engine_coverage,Remark) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)'
        return self.__table.insertMany(sql, lis)

    # 删除数据
    def deleteFromTableResult(self, id):
        sql = 'delete from Table_Result where id=%s'
        prames = (id,)
        return self.__table.delete(sql, prames)

    # 删除全部
    def deleteAllFromTableResult(self):
        sql = 'delete from Table_Result'
        return self.__table.deleteAll(sql)

    # 更改数据
    def updateDataBaseHandle(self, id, Function_content):
        sql = 'update Table_Result set Testcase_context= %s where id = %s'
        prames = (Function_content, id)
        return self.__table.update(sql, prames)


class Table_Testbed(object):

    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    def selectAllFromTableTestbed(self):
        sql = 'select * from Table_Testbed'
        return self.__table.selectall(sql)

    def selectAllIdAndLocateFromTableTestbed(self):
        sql = 'select Id,Testbed_location from Table_Testbed'
        return self.__table.selectall(sql)

class Table_Suspicious_Result(object):

    def __init__(self):
        # 实例化 DataBaseHandle()
        self.__table = DataBaseHandle()

    def insertDataToTableSuspiciousResult(self, Error_type, Testcase_id, Function_id, Testbed_id, Remark):
        """插入单行数据
        :param Error_type: 错误类型
        :param Testcase_id: 用例ip
        :param Function_id: 方法id
        :param Testbed_id: 引擎id
        :param Remark:
        :return:
        """
        sql = 'INSERT INTO Table_Suspicious_Result( Error_type, Testcase_id, Function_id, Testbed_id,  Remark) values(%s,%s,%s,%s,%s)'
        prames = (Error_type, Testcase_id, Function_id, Testbed_id, Remark)
        return self.__table.insert(sql, prames)

# if __name__ == '__main__':
# table_testbed = Table_Testbed()
# print(table_testbed.selectAllIdAndLocateFromTableTestbed())
# table_Function = Table_Function()

# 查询全部数据
# print(table_Function.selectAllFromTableFunction())
# 删除全部数据
# table_Function.deleteAllFromTableFunction()
# 增加单条数据
# table_Function.insertDataToTableFunction(Function_content='Function(hello)',
#                                             SourceFun_id=0,
#                                             Mutation_method=0,
#                                             Remark='hello21')
# 增加多条数据
# lis = [('Function(hello1)', 1, 1, 1), ('Function(hello2)', 2, 2, 2)]
# table_Function.insertManyDataToTableFunction(lis)

# 单行查询
# print(table_Function.selectOneFromTableFunction(id=2))

# 单行查询
# print(table_Function.selectSourceIdFromTableFunction(SourceFun_id=0))
# 删除单条数据
# print(table_Function.deleteFromTableFunction(id=6))
# 更改数据
# print(table_Function.updateDataBaseHandle(5, 'Fuuu'))

# table_Testcases = Table_Testcase()
# #Testcase_context, SourceFun_id, SourceTestcase_id, Mutation_method, ,Fuzzing_times,Mutation_times,Interesting_times,Probability,Remark
# table_Testcases.insertDataToTableTestcase(Testcase_context='Testcase(hello)',
#                                           SourceFun_id=1,
#                                           SourceTestcase_id=0,
#                                           Mutation_method=0,
#                                           Fuzzing_times=0,
#                                           Mutation_times=0,
#                                           Interesting_times=0,
#                                           Probability=None,
#                                           Remark='hello')
