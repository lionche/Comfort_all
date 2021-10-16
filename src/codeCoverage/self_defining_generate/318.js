var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var r = t.use(e("../lib/types")).Type;
    var n = r.def;
    var i = e.node;
    i.get("right") && i.get("left") ? (n.remove(i), i.set("left", null)) : i.set(null);
    var s = i.get("parent"), a = i.get("right"), o = i.get("parent");
    if (a) {
        if (o) {
            var u = o.getBoundingClientRect();
            e.node = i, s.removeChild(i);
        }
        e.node = s, s.removeChild(i);
    } else e.node = t.node = r;
    return e;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
