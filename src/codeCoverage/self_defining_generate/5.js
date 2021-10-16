var NISLFuzzingFunc = function(t) {
    var n;
    var e;
    var r;
    var i;
    var s;
    var o;
    var a;
    var u;
    var l;
    var h;
    var c;
    var f;
    var p;
    var d;
    var e;
    var i;
    var u;
    var o;
    var s;
    var r;
    var e;
    var a;
    var f;
    var l;
    if (r = a[l = u = null], f = e[r], t) r = r.replace(h, function(t, e) {
        return c({}, t, e);
    }), n = n.replace(h, function(t, e) {
        return c({}, t, e);
    }); else {
        var i = r.split(/\s+/);
        n = n.replace(i, function(t, e) {
            return c({}, t, e);
        });
    }
    return n;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
