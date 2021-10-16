var NISLFuzzingFunc = function(t) {
    var e = {
        version: "3.5.17"
    };
    var n = t.requestAnimationFrame;
    return n && t.requestAnimationFrame ? t : new e(t);
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
