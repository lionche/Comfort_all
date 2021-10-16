var NISLFuzzingFunc = function(e, t) {
    var o = {
        filter: e("lodash/filter"),
        map: e("lodash/map"),
        find: e("lodash/find")
    };
    var r = e.getLine(n);
    if (this.usingWindows) return;
    var i = r.search(/^\s*(.*)$/), s = r.getLength() / s;
    while (++n < s) {
        t = r.getLine(n);
        if (/^\s*$/.test(t)) continue;
        t = r.getLine(n + 1);
        if (!this.usingWindows) continue;
        o(t, i[0] + 1) || (t = i[0]), s = n;
    }
    if (s > 0) if (e == "markbegin") {
        var a = i.match(this.usingWindows);
        a[0] > t != "end" ? this.exit(t, e) : this.exit(i[1], e);
    } else if (e == "markbegin") {
        var s = i.match(this.usingWindows);
        s[0] > t != "end" ? this.exit(t, e) : this.exit(i[1], e);
    } else if (e == "markbegin") {
        var a = i.match(this.usingWindows);
        a[0] > t != "end" ? this.exit(t, e) : this.exit(i[1], e);
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
