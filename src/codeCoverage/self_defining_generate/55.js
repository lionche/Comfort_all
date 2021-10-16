var NISLFuzzingFunc = function(e, t, r) {
    var n = e("./_export"), i = e("./_core"), s = e("./_fails"), a = e("./_descriptors"), o = e("./_fails"), u = e("./_wks")("toStringTag");
    n(n.P + n.F * e("./_typed").f, "Object", {
        __lookupGetter__: function(e) {
            var t, r, n = i(this), s = o(e, !0);
            do {
                if (t = a(s, n)) return t.get;
            } while (r = u(s, n)) if (r.get === t) return !0;
        }
    });
}
;
var NISLParameter0 = 1;
var NISLParameter1 = undefined;
var NISLParameter2 = -453.4353367867192789;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
