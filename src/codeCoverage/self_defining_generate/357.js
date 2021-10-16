var NISLFuzzingFunc = function(t) {
    var e = t.get("point");
    return e && e.obj && e.obj.placeHolder;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
