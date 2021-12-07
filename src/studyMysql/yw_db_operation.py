import sqlite3 as db
import os
from tqdm import tqdm

class DBOperation:
    def __init__(self, db_path, table_name='corpus'):
        self.db_path = db_path
        self.table_name = table_name
        self.ddl = []
        if 'corpus' in table_name:
            ddl1 = 'CREATE TABLE IF NOT EXISTS corpus(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Content BLOB NOT NULL); '
            self.ddl.append(ddl1)

        if 'Function' in table_name:
            ddl2 = 'CREATE TABLE IF NOT EXISTS Function(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Function BLOB NOT NULL,' \
                   'SourceFun_Id INTEGER DEFAULT 0,' \
                   'Mutation_method INTEGER DEFAULT 0,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl2)

        if 'Testcase' in table_name:
            ddl3 = 'CREATE TABLE IF NOT EXISTS Testcase(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Testcase BLOB NOT NULL,' \
                   'SourceFun_Id INTEGER DEFAULT 0,' \
                   'SourceTestcase_Id INTEGER DEFAULT 0,' \
                   'Mutation_method INTEGER DEFAULT 0,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl3)

        if 'Probability' in table_name:
            ddl4 = 'CREATE TABLE IF NOT EXISTS Probability(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Testcase_Id INTEGER DEFAULT 0,' \
                   'ChoosenM_times INTEGER DEFAULT 0,' \
                   'ChoosenF_times INTEGER DEFAULT 0,' \
                   'Exception INTEGER DEFAULT 0,' \
                   'Probability REAL DEFAULT 0,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl4)

        if 'Testbed' in table_name:
            ddl5 = 'CREATE TABLE IF NOT EXISTS Testbed(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Testbed BLOB NOT NULL,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl5)

        if 'Result' in table_name:
            ddl6 = 'CREATE TABLE IF NOT EXISTS Result(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'Testcase_Id INTEGER DEFAULT NULL,' \
                   'Testbed_Id INTEGER DEFAULT NULL,' \
                   'Returncode INTEGER DEFAULT NULL,' \
                   'Stdout BLOB DEFAULT NULL,' \
                   'Stderr BLOB DEFAULT NULL,' \
                   'duration_ms INTEGER DEFAULT NULL,' \
                   'seed_cover BLOB DEFAULT NULL,' \
                   'engine_cover BLOB DEFAULT NULL,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl6)

        if 'Suspicious_Result' in table_name:
            ddl7 = 'CREATE TABLE IF NOT EXISTS Suspicious_Result(' \
                   'Id INTEGER PRIMARY KEY AUTOINCREMENT,' \
                   'error_type BLOB DEFAULT NULL,' \
                   'Testcase_Id INTEGER DEFAULT NULL,' \
                   'Function_Id INTEGER DEFAULT NULL,' \
                   'Testbed_Id INTEGER DEFAULT NULL,' \
                   'Remark BLOB DEFAULT NULL); '
            self.ddl.append(ddl7)

        self.connection = None

    def init_db(self):
        if os.path.exists(self.db_path) and not self.is_empty():
            os.remove(self.db_path)
        if not os.path.exists(self.db_path):
            conn = self.get_connection()
            cursor = conn.cursor()
            for ddl in self.ddl:
                cursor.execute(ddl)


    def is_empty(self):
        connection = db.connect(self.db_path)
        cursor = connection.cursor()
        sql = "SELECT count(*) FROM " + self.table_name
        cursor.execute(sql)
        result = cursor.fetchall()
        return result[0][0] == 0

    def get_connection(self):
        if self.connection is None:
            self.connection = db.connect(self.db_path)
        return self.connection

    def finalize(self):
        self.connection.commit()
        self.connection.close()

    def insert(self, column_names: list, values: list):
        connection = self.get_connection()
        cursor = connection.cursor()
        sql = "INSERT INTO " + self.table_name + " ("
        param_list = ""
        if column_names.__len__() > 0:
            sql += column_names[0]
            param_list += "?"
        for i in range(1, column_names.__len__()):
            sql += ","
            sql += column_names[i]
            param_list += ",?"
        sql = sql + ") VALUES (" + param_list + ")"
        cursor.executemany(sql, values)

    def query_all(self, columns: list):
        conn = self.get_connection()
        cursor = conn.cursor()

        sql = "SELECT "
        if columns.__len__() > 0:
            sql += columns[0]
        for i in range(1, columns.__len__()):
            sql += ", "
            sql += columns[i]
        sql += " FROM " + self.table_name

        cursor.execute(sql)
        result = cursor.fetchall()
        return result

    def query(self, statement: str, params: list):
        conn = self.get_connection()
        cursor = conn.cursor()
        cursor.execute(statement, params)
        result = cursor.fetchall()
        return result

    def paging_query(self, columns: list, page: int, page_size: int):
        connection = self.get_connection()
        cursor = connection.cursor()

        sql = "SELECT "
        if columns.__len__() > 0:
            sql += columns[0]
        for i in range(1, columns.__len__()):
            sql += ", "
            sql += columns[i]
        sql += " FROM " + self.table_name
        sql += " LIMIT " + str(page * page_size) + "," + str(page_size)

        cursor.execute(sql)
        return cursor.fetchall()

    def query_count(self):
        conn = self.get_connection()
        cursor = conn.cursor()
        sql = "SELECT count(*) FROM " + self.table_name
        cursor.execute(sql)
        result = cursor.fetchone()
        return result

    def query_part(self, columns: list, start, end):
        conn = self.get_connection()
        cursor = conn.cursor()

        sql = "SELECT "
        if columns.__len__() > 0:
            sql += columns[0]
        for i in range(1, columns.__len__()):
            sql += ", "
            sql += columns[i]
        sql += " FROM " + self.table_name + " where Id >= " + str(start) + " and Id <= " + str(end)

        cursor.execute(sql)
        result = cursor.fetchall()
        return result

    def search(self, content: str):
        conn = self.get_connection()
        cursor = conn.cursor()

        sql = "SELECT * FROM " + self.table_name + " where Content like '%" + content + "%';"
        print(sql)
        cursor.execute(sql)
        result = cursor.fetchall()
        return result

def create_table(db_path: str):
    create_testcases_sql = "CREATE TABLE IF NOT EXISTS Testsuit(" \
                           "id INTEGER PRIMARY KEY AUTOINCREMENT," \
                           "source_id INTEGER DEFAULT 0," \
                           "testcase BLOB DEFAULT NULL," \
                           "remarks INTEGER DEFAULT NULL" \
                           ")"

    create_results_sql = "CREATE TABLE IF NOT EXISTS Results(" \
                         "id INTEGER PRIMARY KEY AUTOINCREMENT," \
                         "testcaseId INTEGER NOT NULL," \
                         "testbedId INTEGER NOT NULL," \
                         "engine BLOB DEFAULT NULL," \
                         "output_id INTEGER NOT NULL UNIQUE," \
                         "bugLabel INTEGER DEFAULT NULL," \
                         "reason BLOB DEFAULT NULL," \
                         "remarks BLOB DEFAULT NULL," \
                         "assignee BLOB DEFAULT NULL," \
                         "submit_date INTEGER DEFAULT NULL" \
                         ")"

    create_suspicious_results_sql = "CREATE TABLE IF NOT EXISTS SuspiciousResults(" \
                                    "id INTEGER PRIMARY KEY AUTOINCREMENT," \
                                    "testcaseId INTEGER NOT NULL," \
                                    "classifyId INTEGER NOT NULL," \
                                    "engine BLOB DEFAULT NULL," \
                                    "output_id INTEGER NOT NULL UNIQUE," \
                                    "bugLabel INTEGER DEFAULT NULL," \
                                    "reason BLOB DEFAULT NULL," \
                                    "remarks BLOB DEFAULT NULL," \
                                    "assignee BLOB DEFAULT NULL," \
                                    "submit_date INTEGER DEFAULT NULL" \
                                    ")"


    conn = db.connect(db_path)
    try:
        cursor = conn.cursor()
        cursor.execute(create_testcases_sql)
        conn.commit()
    except Exception as e:
        print(e)
        print('create failed!')
        conn.rollback()
    finally:
        cursor.close()
        conn.close()

def write_js_to_db(db_path:str, table_name:str,dir_path:str):
    all_files = os.listdir(dir_path)
    for each_file in tqdm(all_files):
        file_name = os.path.join(dir_path, each_file)
        file_name = file_name.replace('\\', '/')
        conn = db.connect(db_path)
        cursor = conn.cursor()
        with open(file_name, 'r', encoding='utf-8', errors='ignore') as f:
            testcase = f.read()
        try:
            insert_sql = f"insert into {table_name} (testcase, remarks) values (?, ?)"
            cursor.execute(insert_sql, [testcase, each_file])

            conn.commit()
        except Exception as e:
            print(e)
            print('select failed!')
            conn.rollback()
        finally:
            cursor.close()
            conn.close()


if __name__ == "__main__":
    '''
    db_path = r"/home/nisl1/nisl8121/yw/TencentProject_win/data/SeedsPool.db"
    create_table(db_path)
    table_name = "Testsuit"
    dir_path = r"/home/nisl1/nisl8121/yw/TencentProject_win/data/testsuit/proprocess_cases"
    write_js_to_db(db_path, table_name, dir_path)
    '''
    test_db = DBOperation(r'E:\04_TencentProject\test.db', ["Function", "Testcase", "Probability", "Testbed", "Result", "Suspicious_Result"])
    test_db.init_db()