var NISLFuzzingFunc = function(t) {
    var e = t.document.documentElement;
    var n = t.bandwidth() / 2;
    return e.apply(n, arguments);
}
;
var NISLParameter0 = [1, true, -152570814, 962721291.1977142924605707, [null]];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
