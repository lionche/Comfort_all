var NISLFuzzingFunc = function(t, e) {
    var n = t.get("point");
    return n && n.obj && n.obj.placeHolder ? {
        obj: n,
        index: e
    } : n;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 66199.7612945023729037;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
