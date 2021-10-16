var NISLFuzzingFunc = function(t, e, i) {
    var n = i(10);
    t.exports = function(t, e, i, s, r) {
        void 0 === r && (r = !1);
        var o = new n(e, i, s);
        return t.setAttribute("x", o.x), t.setAttribute("y", o.y), o;
    };
}
;
var NISLParameter0 = 8303000660;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
