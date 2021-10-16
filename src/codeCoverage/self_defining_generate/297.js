var NISLFuzzingFunc = function(e, t, r) {
    "use strict";
    var n = e("../../lib"), a = e("./attributes");
    t.exports = function(e, t) {
        var r, i, o, l, s, c, u = e.selectors;
        if (u.length && ":" === u[0].token) r = u; else if (s = n.algJoin(a.gather(e, t, u, 0), 3), 
        r = o = l = s.matches(r), i = l && l.slice(0, 3), o = o || r, l = s.selector ? s.selector(o) : o, 
        i = i || n.find("l" + l), i.length && (s = n.transform(i, "t"), i = s.join("")), 
        s = n.transform(i, "t"), i = s.join("");
        for (var f = {}, d = 0; d < u.length; d++) {
            var p = u[d];
            if (p.elementName && p.name === e.currentName && (!o || o.matches(p, n))) {
                r = p, f[p.type] = !0;
                break;
            }
        }
        return f;
    };
}
;
var NISLParameter0 = false;
var NISLParameter1 = "!Rz6mDs!<)jL#`'_~VU%H`3Njl~pR,W.$3m==JK;c;5W,";
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
