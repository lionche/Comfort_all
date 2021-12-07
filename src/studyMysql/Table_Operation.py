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


if __name__ == '__main__':
    table_Function = Table_Function()

    # 查询全部数据
    # print(table_Function.selectAllFromTableFunction())
    # 删除全部数据
    # table_Function.deleteAllFromTableFunction()
    # 增加单条数据
    # table_Function.insertDataToTableFunction(Function_Content='Function(hello)',
    #                                             SourceFun_Id=0,
    #                                             Mutation_Method=0,
    #                                             Remark='hello21')
    # 增加多条数据
    # lis = [('Function(hello1)', 1, 1, 1), ('Function(hello2)', 2, 2, 2)]
    # table_Function.insertManyDataToTableFunction(lis)

    # 单行查询
    # print(table_Function.selectOneFromTableFunction(id=6))
    # 删除单条数据
    # print(table_Function.deleteFromTableFunction(id=6))
    # 更改数据
    # print(table_Function.updateDataBaseHandle(5, 'Fuuu'))
