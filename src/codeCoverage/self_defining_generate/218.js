var NISLFuzzingFunc = function(t, e, n) {
    var r = n(0), i = n(9), o = n(17), a = n(4), s = n(2)("toStringTag");
    t.exports = function(t, e, n) {
        t && r(t, e, s(1, n));
    };
}
;
var NISLParameter0 = true;
var NISLParameter1 = undefined;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
