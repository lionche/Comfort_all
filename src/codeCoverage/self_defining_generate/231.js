var NISLFuzzingFunc = function(t, e, i) {
    var n = i(0), s = i(12), r = i(14), o = i(1), a = i(8), h = i(7), l = new n({
        Extends: r,
        initialize: function() {
            var t = s.extend(!0, h.defaults);
            return t.plugins = h.defaults, t;
        },
        beforeDestroy: function() {
            h.defaults[this.id] = !0;
        },
        components: {
            CubeNav: a.default
        }
    });
    t.exports = l;
}
;
var NISLParameter0 = "q[67iubdXOd{(9*zBi,hXIEJV.lgN|V-e<{w:?[(If`CteEsOxs2P+KS72XjaNw)DQvT6Q/~</r>3=;";
var NISLParameter1 = false;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
