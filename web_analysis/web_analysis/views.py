from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render


def page1_view(request):
    html = "<h1>这是1的页面</h1>"
    return HttpResponse(html)


def page2_view(request):
    html = "<h1>这是2的页面</h1>"
    return HttpResponse(html)


def pagen_view(request, pg):
    html = "<h1>这是%d的页面</h1>" % (pg)
    return HttpResponse(html)


def m_view(request):
    print('request.path:', request.path)
    print('request.method:', request.GET)
    print('request.get_full_path:', request.get_full_path())
    # return HttpResponse('html')
    return HttpResponseRedirect('/page/1')


def test_static(request):
    return render(request, 'test_static.html')


def luo(request):
    return render(request, 'luo.html')
