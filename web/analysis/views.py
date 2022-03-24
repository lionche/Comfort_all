from django.shortcuts import render

from workline.harness_tools.harness_for_web import harness_testcase
from .models import Testbed, Testcase, Result, Suspicious_Result

def show_testbed(request):
    all_testbed = Testbed.objects.all()
    # v8 = Testbed.objects.filter(Testbed_name__exact='v8')
    # return render(request, 'analysis/testbed.html', {'all_testbed': all_testbed})
    return render(request, 'testbed.html', locals())




def show_testcase(request):
    Testcase_id = 7
    testbed_info = {1: 'v8',
                    2: 'spiderMonkey',
                    3: 'chakra',
                    4: 'jsc',
                    5: 'quickjs',
                    6: 'jerryscript',
                    7: 'graaljs',
                    8: 'hermes',
                    9: 'chakra-beta'}

    # if request.method == 'GET':
    Testcase_id = request.GET.get('id')
    # print(Testcase_id)
    all_testcase = Testcase.objects.filter(id=Testcase_id)
    testcase_result = Result.objects.filter(Testcase_id=Testcase_id)
    all_suspicious_result = Suspicious_Result.objects.filter(Testcase_id=Testcase_id)

    remark = request.POST.get('remark')
    all_suspicious_result.update(Remark=remark)

    print(remark)

    return render(request, 'testcase.html', locals())

    # if request.method == 'POST':
    #     remark = request.POST.get('remark')
    # #     all_testcase = Testcase.objects.filter(id=Testcase_id)
    # #     testcase_result = Result.objects.filter(Testcase_id=Testcase_id)
    # #     all_suspicious_result = Suspicious_Result.objects.filter(Testcase_id=Testcase_id)
    # #     print(all_testcase[0].Testcase_context)
    # #     print(remark)
    #     return render(request, 'testcase.html', locals())


def harness(request):
    testbed_info = {1: 'v8',
                    2: 'spiderMonkey',
                    3: 'chakra',
                    4: 'jsc',
                    5: 'quickjs',
                    6: 'jerryscript',
                    7: 'graaljs',
                    8: 'hermes',
                    9: 'chakra-beta'}

    # if request.method == 'GET':
    Testcase_id = request.GET.get('id')
    if not Testcase_id:
        Testcase_id = 1

    all_testcase = Testcase.objects.filter(id=Testcase_id)
    all_suspicious_result = Suspicious_Result.objects.filter(Testcase_id=Testcase_id)
    testcase = [all_testcase.first().id,
                all_testcase.first().Testcase_context,
                all_testcase.first().SourceFun_id,
                all_testcase.first().SourceTestcase_id,
                all_testcase.first().Fuzzing_times,
                all_testcase.first().Mutation_method,
                all_testcase.first().Mutation_times,
                all_testcase.first().Interesting_times,
                all_testcase.first().Probability,
                all_testcase.first().Remark]
    try:
        now_remark: str = all_suspicious_result.first().Remark
    except:
        now_remark = None

    print(f'now_remark:{now_remark}')
    # print(all_suspicious_result.first.Testcase_id)

    # if request.method == 'POST':
    testcase_content = request.POST.get('testcase_content')

    if testcase_content:
        testcase[1] = testcase_content

    remark = request.POST.get('remark')
    if remark is not None:
        all_suspicious_result.update(Remark=remark)
        now_remark = remark

    print(f'now_remark_post:{now_remark}')
    # print(testcase_content)

    harness_result, different_result_list = harness_testcase(testcase)

    result_object_list = []
    returncode = ''

    for output in harness_result.outputs:
        returncode += str(output.testbed_id)
        returncode += f'({output.returncode})'

    return render(request, 'harness.html', locals())

    # if request.method == 'POST':
    #     remark = request.POST.get('remark')
    # #     all_testcase = Testcase.objects.filter(id=Testcase_id)
    # #     testcase_result = Result.objects.filter(Testcase_id=Testcase_id)
    # #     all_suspicious_result = Suspicious_Result.objects.filter(Testcase_id=Testcase_id)
    # #     print(all_testcase[0].Testcase_context)
    # #     print(remark)
    #     return render(request, 'testcase.html', locals())


