# 系统文档



## 1.代码说明
* **step1_save_orginal_to_function_table.py**:构建种子池
* **step2_enrich_function_table.py**: 对种子池进行扩充
* **step3_assemble_function_to_testcases.py**:将种子池中的方法组装成方法。
* **step4_harness.py**:差分测试，将组装好的方法
 * **step5_auto_analysis.py:** 自动分析可疑用例
* **step6_mutate_testcase.py**：变异可疑用例



### 2.数据库说明

1. **Table_Function**:方法表
2. **Table_Testcase**:用例表
3. **Table_Testbed**:差分引擎表
4. **Table_Result**:差分结果表
5. **Table_Suspicious_Result**:可疑结果表



**1.Table_Function**

**方法表**

| 序号 |        名称        |     表述     |    类型    |
| :--: | :----------------: | :----------: | :--------: |
|  1   |        `id`        |    表主键    | bigint(20) |
|  2   | `Function_content` |   方法内容   |  longtext  |
|  3   |   `SourceFun_id`   |  父方法内容  |  int(20)   |
|  4   | `Mutation_method`  | 变异方法编号 |  Int(20)   |
|  5   |  `Mutation_times`  |   变异次数   |  Int(20)   |
|  6   |      `Remark`      |     备注     |  longtext  |



**2.Table_Testcase**

**用例表**

| 序号 |        名称         |          表述          |    类型    |
| :--: | :-----------------: | :--------------------: | :--------: |
|  1   |        `id`         |         表主键         | bigint(20) |
|  2   | `Testcase_context`  |        用例内容        |  longtext  |
|  3   |   `SourceFun_id`    |       父方法编号       |  int(20)   |
|  4   | `SourceTestcase_id` |       父用例编号       |  Int(20)   |
|  5   |   `Fuzzing_times`   |       被测试次数       |  Int(20)   |
|  6   |  `Mutation_method`  | 从哪个变异方法变异而来 |  Int(20)   |
|  7   |  `Mutation_times`   |       被变异次数       |  Int(20)   |
|  8   | `Interesting_times` |    触发可疑行为次数    |  Int(20)   |
|  9   |    `Probability`    |       被选择概率       |  Int(20)   |
|  10  |      `Remark`       |          备注          |  longtext  |



**3.Table_Testbed**

**引擎表**

| 序号 |        名称        |     表述     |    类型    |
| :--: | :----------------: | :----------: | :--------: |
|  1   |        `id`        |    表主键    | bigint(20) |
|  2   |   `Testbed_name`   |   引擎名字   |  longtext  |
|  3   | `Testbed_version`  |   引擎版本   |  longtext  |
|  4   | `Testbed_location` | 引擎安装位置 |  longtext  |
|  5   |      `Remark`      |     备注     |  longtext  |



**4.Table_Result**

**差分结果表**

| 序号 |       名称        |    表述    |     类型     |
| :--: | :---------------: | :--------: | :----------: |
|  1   |       `id`        |   表主键   |  bigint(20)  |
|  2   |   `Testcase_id`   |   用例id   |   int(10)    |
|  3   |   `Testbed_id`    | 差分引擎id |   int(11)    |
|  4   |   `Returncode`    | 引擎返回值 |   int(11)    |
|  5   |     `Stdout`      |  正确输出  |   longtext   |
|  6   |     `Stderr`      |  错误信息  |   longtext   |
|  7   |   `Duration_ms`   |  执行时长  |   int(11)    |
|  8   |  `Seed_coverage`  | 种子覆盖率 | decimal(5,3) |
|  9   | `Engine_coverage` | 引擎覆盖率 | decimal(5,3) |
|  10  |     `Remark`      |    备注    |   longtext   |



**5.Table_Suspicious_Result**

**可疑结果表**

| 序号 |     名称      |        表述        |    类型    |
| :--: | :-----------: | :----------------: | :--------: |
|  1   |     `id`      |       表主键       | bigint(20) |
|  2   | `Error_type`  |      错误类型      |  longtext  |
|  3   | `Testcase_id` |       用例id       |  int(11)   |
|  4   | `Function_id` |       方法id       |  int(11)   |
|  5   | `Testbed_id`  |     报错引擎id     |  int(11)   |
|  5   | `Is_filtered` | 自动分析错误的编号 |  longtext  |
|  7   |   `Remark`    |        备注        |  longtext  |



## 3.部署docker

1. 进入`Comfort_Docker_Release`文件夹内

2. `docker-compose up -d`:使用docker compose来创建2个容器：1个主系统容器，1个数据库

```
主系统容器：
	ssh端口号:10086
	ssh密码:comfort

数据库:
	端口:8888
	用户名:root
	密码:mysql
```

3. `docker exec -it comfort_container bash`进入容器

4. `bash /root/Comfort_all/initialize.sh`: 创建数据库，恢复初始种子池和差分引擎数据库(可能需要半小时)



## 4. 系统流程

### 1.将文件存入数据库（已经在3.4导入时完成，无需执行）

将`/root/Comfort_all/data/JStestcases`中的方法存到数据库中。

`python /root/Comfort_all/workline/01_save_orginal_to_function_table.py`



### 2.扩充种子池（已经在3.4导入时完成，无需执行）

对于2.1中存入数据库的种子进行扩充，扩充后的内容继续存入数据库。

`python /root/Comfort_all/workline/step2_enrich_function_table.py`



### 3. 组装用例

将方法数据库的方法组装成可以运行的测试用例，并存入用例表中。

`python /root/Comfort_all/workline/step3_assemble_function_to_testcases.py`



### 4. 差分测试

从用例表中取出用例进行差分，所有结果存入差分结果表，可疑结果存入可疑结果表

`python /root/Comfort_all/workline/step4_harness.py`



### 5. 自动分析

自动分析可疑结果表中的用例

`python /root/Comfort_all/workline/step5_auto_analysis.py`

### 6.用例变异

从用例表中取出用例进行差分，所有结果存入差分结果表，可疑结果存入可疑结果表

`python /root/Comfort_all/workline/step6_mutate_testcase.py`

#### 6.1生成变异

- 直接续写：使用GPT生成的代码，从截断点之后替换全部代码
- 续写变异：使用GPT生成的代码，替换截断点所在的代码块

#### 6.2通用变异规则

- 随机代码块删除：在主函数体内随机删除变量定义之外的代码块
- While与If代码块互换：将if语句与while进行互相转换
- 条件代码块包裹：在主函数体内随机选取变量定义之外的代码块使用if或while语句进行包裹
- 操作符替换：在函数体内随机选取等元操作符进行替换

#### 6.3专用变异规则

- 语义相近的API替换：将语义相同的API进行互相转换
- 返回值相同的API替换：将定义的变量使用相同返回值的语句进行替换
- 原型链污染：对定义的对象进行`__proto__`属性添加
- 属性篡改：对定义的数组使用`__defineGetter__`与`__defineSetter__`修改属性
- 热点函数优化：对主函数内定义的函数添加循环调用



