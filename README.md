# 系统文档





## 步骤流程
* **step1_save_orginal_to_function_table.py**:构建种子池
* **step2_enrich_function_table.py**: 对种子池进行扩充
* **step3_assemble_function_to_testcases.py**:将种子池中的方法组装成方法。
* **step4_harness.py**:差分测试，将组装好的方法
 * **step5_auto_analysis.py:** 自动分析可疑用例
* **step6_mutate_testcase.py**：变异可疑用例



### 数据库



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

**用例**

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








### P1 - Preliminary: Configure the GPU Running Environment on the Host Machine (Optional) 
If you wish to use an NVIDIA GPU on the host machine (running Ubuntu 18.04) to execute the AE, please follow the instructions below to setup the GPU execution environment:

> - Copy [this bash script](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/data/nvidia-container-runtime-script.sh) and run the following command in **the host environment** with sudo permission:
> 
>     ```bash nvidia-container-runtime-script.sh```
>      
>      Note that this step may break the existing GPU and docker setup of the host machine. 
>  
> - Next, test if the GPU running environment is successfully configured:
>  
>   ```docker run --help | grep -i gpus  ```
>   
>     You should be able to see the the GPU information if it is successfully configured.

Please note that the above steps for configuring the GPU environment were only tested on **a host machine running Ubuntu 18.04**. It may throw exceptions or errors when configuring in other Linux distributions. If you have difficulties in setting up the GPU, you can opt to use the CPU for AE testing or use the pre-configured, live server given in the getting start guide to go through the setps. 

### 1. 构建种子池
#### 1.2 Setup environmental parameters:

After importing the docker container **and getting into bash** in the container, make sure you run the below command to setup the environmental variables, before using any of the AE scripts:

```source /root/.bash_profile``` 


This script will also start a MYSQL database deamon needed for program mutations and differentiated testing. 

 

### 2. 构建种子池

**已经在恢复数据库时完成，不需要再次运行**

#### 2.1.将文件存入数据库

将`/root/Comfort_all/data/JStestcases`中的方法存到数据库中。

`python /root/Comfort_all/workline/01_save_orginal_to_function_table.py`

#### 2.2 扩充种子池

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



