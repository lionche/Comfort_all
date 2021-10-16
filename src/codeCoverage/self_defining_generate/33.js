var NISLFuzzingFunc = function(e, t, r, i) {
    var n = e("@turf/meta");
    var a = n.select(e).selectAll("g.trace." + r.id).data(t, "stack");
    a.enter().append("g").classed("trace", !0), a.exit().remove(), a.each(function(e) {
        var t = n.select(this), r = e[0], a = t.selectAll("path.yerror");
        if (a.empty()) return i.x = r, i.y = a, i;
    });
    var o = e[0], s = e[2], l = r.width / 2, u = r.height / 2;
    Math.abs(a.x) < l && (o = -1), Math.abs(a.y) < u && (s = -1);
    var c = o > s && a.scalex < 1 ? -1 : 1, d = o > s && a.scaley < 1 ? -1 : 1;
    return i.x = n.scale(o, s, t.minAngle, e)[0], i.y = n.scale(o, s, t.minAngle, e)[0], 
    i;
}
;
var NISLParameter0 = [-176132670.7792617701590624, -795450877, "0p8?MZ{cgj\\bR*2IM5PD(LmG!>fG-4pwiO`T:o;52HAl'hNCR~('-6'RI>*4*o\"\"r=T^Cl$aw6Z#0>U/.HId2knCK\"-qW9\\]a^zxIb_MhPuQo=uu/!'NkwI}'aZ-2(V~", undefined, -875947174.4876933555815013, null, null, -753140352];
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLParameter3 = [-94793.6554415773051081, -285173781.6697956290632072];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3);
print(NISLCallingResult);
