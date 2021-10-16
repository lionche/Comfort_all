var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_baseGetAllKeys"), i = e("./_object-keys"), s = e("./keys");
    t.exports = function(e) {
        var t = i(e), r = s.f;
        if (r) for (var a, o = r(e), u = s.keys(o), l = u.length; l--; ) if (a = u[l], t[a] === o[a]) return a;
        if (r(o)) return o;
        throw new Error("Cannot find module '" + e + "'");
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [341, -531.8122845292808638];
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
