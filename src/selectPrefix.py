#从文件中选择前缀

def getJSfile(path,lines_num):
    with open(path, 'r') as f:
        lines_list = f.readlines()
        line_list_cut = lines_list[0:lines_num]
        function_cut = '';
        for i in line_list_cut:
            function_cut += i ;
        # print(function_cut)
        return function_cut;

def getJSfileSize(path):
    with open(path, 'r') as f:
        lines_list = f.readlines()
    return len(lines_list)

# function_cut = getJSfile('../data/test_function/0.js',1)