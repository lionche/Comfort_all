var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var r;
    var i = r.distance(t), n = r.distance(e), o = r.distance(t), a = r.distance(n), s = r.distance(n), l = r.distance(t), u = r.distance(e), c = r.distance(n), d = r.distance(t);
    return !(Math.atan2(l, u) + Math.atan2(c, d)) || (a < o && s < o || a > s && d < c && d > c);
}
;
var NISLParameter0 = [undefined, [undefined, true, null, 1.005392020131005815, null, -142.809906285073062, 66524.7782159796992654, -1.2496432726788539, undefined, "26L.u1CF[i0\"J[q)ZY}7/&j8s>HG5CD8\"ud1bj}R*G/Y^HFCGV8Kqr\"12Bi#6L(6j"]];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
