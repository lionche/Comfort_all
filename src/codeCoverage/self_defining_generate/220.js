var NISLFuzzingFunc = function(a) {
    var b = a.getUrl;
    return b.getView().getElementById(a);
}
;
var NISLParameter0 = [null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
