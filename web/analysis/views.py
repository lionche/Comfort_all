import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import ListView
from django_tables2 import tables, SingleTableView, RequestConfig

from workline.harness_tools.harness_for_web import harness_testcase
from .models import Testbed, Testcase, Result, Suspicious_Result
from .tables import TestbedTable


def show_testbed(request):
    all_testbed = Testbed.objects.all()
    # v8 = Testbed.objects.filter(Testbed_name__exact='v8')
    # return render(request, 'analysis/testbed.html', {'all_testbed': all_testbed})
    return render(request, 'testbed.html', locals())


def show_testcase(request):
    # Testcase_id = 7
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


testcase = None


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
    global testcase
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

    # print(f'now_remark:{now_remark}')
    # print(all_suspicious_result.first.Testcase_id)

    # if request.method == 'POST':
    # testcase_content = request.POST.get('testcase_content')

    # if testcase_content:
    #     testcase[1] = testcase_content

    # remark = request.POST.get('remark')
    # if remark is not None:
    #     all_suspicious_result.update(Remark=remark)
    #     now_remark = remark

    # print(f'now_remark_post:{now_remark}')
    # print(testcase_content)

    harness_result, different_result_list = harness_testcase(testcase)

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


def herness_ajax(request):
    # herness_ajax = request.GET.get("herness_ajax")
    herness_ajax = request.POST.get("herness_ajax")
    print(herness_ajax)
    global testcase
    testcase[1] = herness_ajax
    # print(testcase)
    harness_result, different_result_list = harness_testcase(testcase)

    def obj_different_result_2_json(obj):
        return {
            'testcase_id': obj.testcase_id,
            "error_type": obj.error_type,
            "testbed_id": obj.testbed_id,
        }

    different_result_list = json.dumps(different_result_list, default=obj_different_result_2_json)

    # print(harness_result)
    # print(different_result_list)

    dic = {'harness_result': str(harness_result), 'different_result_list': different_result_list}
    dic = json.dumps(dic)
    # print(dic)
    # name_dict = {'harness_result': harness_result, 'twz': 'Love python and Django'}

    # return HttpResponse(harness_result, different_result_list)

    # return HttpResponse(harness_result)
    return HttpResponse(dic)

def remark_ajax(request):
    remark_ajax = request.POST.get("remark_ajax")
    print(remark_ajax)
    all_suspicious_result = Suspicious_Result.objects.filter(Testcase_id=testcase[0])
    all_suspicious_result.update(Remark=remark_ajax)

    return HttpResponse("remark保存成功")

class testbed(SingleTableView):
    model = Testbed
    table_class = TestbedTable
    template_name = 'testbed.html'
