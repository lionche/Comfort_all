import pymysql

sql_config = dict(host='127.0.0.1',
                  port=8888,
                  user='root',
                  passwd='mysql123',
                  # db='comfort',
                  db='comfort_django',
                  charset='utf8mb4')


class DataBaseHandle(object):
    """定义MYSQL数据库操作类"""

    def __init__(self):
        """初始化数据库信息创建连接"""
        self.conn = sql_config

    # 创建表
    def createTable(self, sql):
        conn = pymysql.connect(**self.conn)
        cur = conn.cursor()
        cur.execute(sql)
        cur.close()
        conn.close()

    # 查询单行 sql:为SQL语句  prames:为要传入的参数，可以为元组
    def selectOne(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        # 将查询数据结果以字典形式呈现
        cur.execute(sql, prames)
        # 匹配单条数据
        data = cur.fetchone()
        cur.close()
        conn.close()
        return data  # 返回执行sql语句得到的数据，查询一般用得到。

    # 查询全部数据
    def selectall(self, sql):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        cur.execute(sql)
        # data = cur.fetchmany(number)接受number条数据返回
        # featchall匹配多条数据
        data = cur.fetchall()
        cur.close()
        conn.close()
        return data

    # 查询多条数据
    def selectmany(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        cur.execute(sql, prames)
        # 接受number条数据返回
        data = cur.fetchmany()
        cur.close()
        conn.close()
        return data

    # 插入数据
    def insert(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql, prames)
        conn.commit()
        cur.close()
        conn.close()
        return recount

    # 插入多条数据
    def insertMany(self, sql, lis):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        # executemany一次处理多条数据
        recount = cur.executemany(sql, lis)
        conn.commit()
        cur.close()
        conn.close()
        return recount

    # 删除数据
    def delete(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql, prames)
        conn.commit()
        cur.close()
        conn.close()
        return recount

    # 删除全部数据
    def deleteAll(self, sql):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql)
        conn.commit()
        cur.close()
        conn.close()
        return recount

    # 更新数据
    def update(self, sql, prames):
        conn = pymysql.connect(**self.conn)

        cur = conn.cursor()
        recount = cur.execute(sql, prames)
        conn.commit()
        cur.close()
        conn.close()
        return recount
