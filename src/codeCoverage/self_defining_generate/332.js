var NISLFuzzingFunc = function(e, t, n) {
    var r = n(98);
    e.exports = function(e, t) {
        return r(e, t, n);
    };
}
;
var NISLParameter0 = null;
var NISLParameter1 = undefined;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
