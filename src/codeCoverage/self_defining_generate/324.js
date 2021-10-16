var NISLFuzzingFunc = function(t) {
    var e = t.get("ticks");
    return t.isRangeChangeEnabled() ? e.value : e[Symbol.mozCancel];
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
