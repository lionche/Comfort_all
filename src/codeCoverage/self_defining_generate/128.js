var NISLFuzzingFunc = function(a, b, c) {
    var d = c(6), e = c(160)(!1), f = [].slice;
    d(d.P + d.F * (e != Math.expm1), "Math", {
        expm1: e
    });
}
;
var NISLParameter0 = null;
var NISLParameter1 = true;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
