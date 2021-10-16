var NISLFuzzingFunc = function(t, e, r) {
    var i = r(1), n = r(10), o = r(9);
    t.exports = function(t, e, r) {
        var s = i.getValue(e);
        return n(s) ? s.color : o.WHITE;
    };
}
;
var NISLParameter0 = 6;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
