var NISLFuzzingFunc = function(e, t, r, n) {
    var o = e(4);
    t.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e;
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 274.5916377614200784;
var NISLParameter2 = 1;
var NISLParameter3 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3);
print(NISLCallingResult);
