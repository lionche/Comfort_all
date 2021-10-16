var NISLFuzzingFunc = function(e, t, n) {
    var r = n(8);
    var o = n(160);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, i;
        if (t && "function" == typeof (n = e.toString) && !o(i = n.call(e))) return i;
        if ("function" == typeof (n = e.valueOf) && !o(i = n.call(e))) return i;
        if (!t && "function" == typeof (n = e.toString) && !o(i = n.call(e))) return i;
        throw TypeError("Can't convert object to primitive value");
    };
}
;
var NISLParameter0 = null;
var NISLParameter1 = false;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
