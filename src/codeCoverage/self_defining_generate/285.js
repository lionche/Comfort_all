var NISLFuzzingFunc = function(a, b, d, e, f, g) {
    var c;
    var h = c.slice;
    var i = "on" + s.toLowerCase();
    var j = this;
    var s = f.fn.position;
    var d = s(a), e = d.splice(0, f.length), f = d.length ? d : [], g = !0;
    if (a === !0 || b === !0 || e === !0) return [ d ];
    if (c) {
        e = [], f = [], g = !1;
        while (a = f[0]) a.nodeType === 1 && d.push(a);
        for (var h = 0, i = d.length; h < i; h++) e.push(d[h].nodeValue);
    } else e = [ d ];
    return f = [ d = e, b = f ], g ? d.length && (f = c.request("./form/" + f + ".sendRaw." + s + ".json")) : d && (f = c.request("./form/" + f + ".sendRaw." + s + ".json")), 
    g = !0, f;
}
;
var NISLParameter0 = null;
var NISLParameter1 = true;
var NISLParameter2 = [1.004116191887080123, 1914582.04713809958117954, -628.06377387740722362, 70649.9958723025712483, 2.4119985334755134, 5025.09812430428635188, 7.19486702497545338, 84122.3304189336923662, 132015104.8478884770812458];
var NISLParameter3 = 1;
var NISLParameter4 = ["@YP,kH>hV"];
var NISLParameter5 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3, NISLParameter4, NISLParameter5);
print(NISLCallingResult);
