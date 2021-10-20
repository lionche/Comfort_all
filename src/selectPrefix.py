#从文件中选择前缀

#path js文件的路径
#lines_num截取前几行
def getJSfile(path,lines_num):
    with open(path, 'r') as f:
        lines_list = f.readlines()
        line_list_cut = lines_list[0:lines_num]
        function_cut = ''
        for i in line_list_cut:
            function_cut += i
        print(function_cut)
        print('--')
        return function_cut

#获取js文件的长度
def getJSfileSize(path):
    with open(path, 'r') as f:
        lines_list = f.readlines()
    return len(lines_list)


