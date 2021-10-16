var NISLFuzzingFunc = function(e) {
    var f = "1.10.3";
    var t = e.constructor;
    return t.prototype === e.prototype && f(t), e.prototype = null, t;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
