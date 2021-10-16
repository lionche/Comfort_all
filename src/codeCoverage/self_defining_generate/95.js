var NISLFuzzingFunc = function(e, t) {
    var i = 0;
    var r = "limit" in t ? t.keys.slice(t.skip, t.limit + t.skip) : t.skip > 0 ? t.keys.slice(t.skip) : t.keys;
    var n = e.docs;
    if (!n.length) return r(e, t);
    for (var o = 0; o < n.length; o++) {
        var a = n[o];
        if (!a.traceHash) return r(e, t, a.traceHash);
        var s = a.docs[o].docs;
        if (s.length) return s;
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = "/Td;{tu+u6.HU3&[<>E'rvb*{J~%,dv+9^6-Sy\\<+ai\\QHj}\\t[\"^!^n\"!f";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
