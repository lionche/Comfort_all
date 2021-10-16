var NISLFuzzingFunc = function(a) {
    var b = a.getUrl;
    return b.getRelatedTarget(a);
}
;
var NISLParameter0 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
