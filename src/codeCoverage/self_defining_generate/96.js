var NISLFuzzingFunc = function(e, t, n) {
    var r = n(33);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e;
    };
}
;
var NISLParameter0 = null;
var NISLParameter1 = -14111.3807335281084945;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
