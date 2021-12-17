import pathlib
import subprocess
import tempfile


def Testcase_Mutation(file_name):
    cmd = ['node', './operator_replace.js', '-f', file_name]
    pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, universal_newlines=True)
    stdout, stderr = pro.communicate()
    testcase = []
    result = stdout.split("------------------------------")
    for i in result:
        i = i.strip()
        if i != "":
            testcase.append(i)
    return testcase


if __name__ == "__main__":
    testcases_context = '''var a = function test(a, b) { 
    c = a + b;
    return c;
    a(1,2);
    }'''
    with tempfile.NamedTemporaryFile(delete=True) as tmpfile:
        temp_file_path = tmpfile.name
        # print(temp_file_name)  # /tmp/tmp73zl8gmn
        tmpfile.write(testcases_context.encode())
        tmpfile.seek(0)
        tmpTxt = tmpfile.read().decode()
        # print(tmpTxt)
        result = Testcase_Mutation(temp_file_path)
        print(len(result))
        for item in result:
            print(item)
