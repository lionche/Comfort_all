# 统计出错的js文件
with open('log.txt', 'r') as f:
    # lines = f.read()
    lines_list = f.readlines()
count = 0
for line in lines_list:
    if 'Missing semicolon' in line:
        count +=1
        print(count)
print(count)


#Missing semicolon 31320
#Unnecessary semicolon 9304
#Expected an assignment or function call and instead saw an expression. #13402