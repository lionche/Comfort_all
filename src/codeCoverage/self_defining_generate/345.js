var NISLFuzzingFunc = function(t, e, i) {
    var n = i(10);
    t.exports = function(t, e, i, s, r) {
        return n(t, "scaleY", e, i, s, r);
    };
}
;
var NISLParameter0 = -535286048;
var NISLParameter1 = 556353;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
