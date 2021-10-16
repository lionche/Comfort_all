var NISLFuzzingFunc = function(e, t, n) {
    var r = n(8);
    return r.f(e, t, n);
}
;
var NISLParameter0 = true;
var NISLParameter1 = undefined;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
