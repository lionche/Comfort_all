var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseIsMatch"), i = e("./_getMatchData"), s = e("./_matchesStype");
    t.exports = function(e, t) {
        var r, o = t.constructor;
        return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && s(r) && i(o) && (r = function() {
            return s(this, e) ? this[e] : t[e];
        }), r;
    };
}
;
var NISLParameter0 = false;
var NISLParameter1 = [-42415, -519139, 1, 11027597];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
