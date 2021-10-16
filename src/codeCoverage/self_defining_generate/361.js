var NISLFuzzingFunc = function(t, e) {
    var i = 0;
    var s = t.geometry.type;
    var n = t("@turf/meta");
    var r = n.node({
        isStart: !1,
        pt: e.pt,
        seg: e,
        primary: 0,
        other: t,
        other: null
    }), a = r.primary < t.primary ? "preferredFamily" : "defaultFamily", o = r.secondary < t.secondary ? "postferredFamily" : "sameFamily";
    return n.div(a, function(t) {
        if (0 !== o) {
            var i = n.div(a, o), l = i.outerHeight, u = i.outerWidth, c = i.parentElement.clientWidth, p = i.parentElement.clientHeight, f = s(i), h = o < o ? 1 : -1;
            f = s(i.clientWidth, 2), h = f / 2, n.div(a, function(t) {
                var e = c - t.parentElement.clientWidth, i = u - t.parentElement.clientHeight;
                if (i = n.concat([ e, i ]), !e) return;
                c = i / 2, i = n.concat([ e + 1, i ]), f = s(i - c, 2), h = f / 2, n.div(a, function(t) {
                    var e = c - t.parentElement.clientWidth, i = u - t.parentElement.clientHeight;
                    if (i = n.concat([ e, i ]), !e) return;
                    i = n.concat([ e - c, i ]), f = s(i - c, 2), h = f / 2, n.div(a, function(t) {
                        var e = c + t.clientWidth, i = u + t.parentElement.clientHeight;
                        i = n.concat([ e, i ]), n.push(t);
                    });
                });
            });
        }
        return n;
    }(t, e);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
