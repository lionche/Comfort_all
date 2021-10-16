var NISLFuzzingFunc = function(a, b) {
    var c = {};
    if (null == a) return null;
    var d = c.getProperty(a);
    if (null != d) return d;
    var e = typeof a, f = typeof b;
    return "number" == e ? f ? a % b : f ? b % b : a % b;
}
;
var NISLParameter0 = 427803157;
var NISLParameter1 = -241;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
