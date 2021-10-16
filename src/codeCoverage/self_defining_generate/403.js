var NISLFuzzingFunc = function(e, t) {
    var n = this._get(e, "changeMonth"), r = this._get(e, "changeYear"), i = this._get(e, "fields");
    e = e || "", t = t || "";
    var o = this._getDefault(e, "date");
    if (n) {
        n = o.month || o.month || o.month || o.month, e = o.format || n, t = o.date || o.getFormat && o.getFormat("date") || o.date || o.date;
        var a = o.format || r && r.split("+") || [], l = o.compare && !l, s = o.format || n, u = o.compare && !l;
        u && (e = o.format ? {
            $gt: -1
        } : {
            $lt: -1
        }), i && (a = a.length && "date" === a[a.length - 1].toLowerCase() ? a.getTime() : {})), 
        s && (l = s.getTime() || {
            $gt: 0
        }), o.isDST() ? o.formatDate(t, {
            $lt: e
        }) : o.formatDate(t, {
            $gt: e
        });
    } else o.each(function(e, t) {
        var n = t.match(/MMMM/), r = t.match(/DD[+\-]? MMM/), i = t.match(/DD[+\-]?MMMM/), a = t.match(/DD[+\-]?D Doounds[' + l[0] + ']/), o = t.match(/DD[+\-]?WW[0]/), s = t.match(/DD[+\-]?WW[1]/), u = t.match(/DD[+\-]?WW[0].+[0-1].*/[1-9]/), l = t.match(/DD[+\-]?D[+\-]?[0-9]+/), c = t.match(/DD[+\-]?WW[0].+[0-9].*/[1-9]/), p = t.match(/DD[+\-]?WW[1]/), h = t.match(/DD[+\-]?WW[0].+[0-9].+[0-9]./), f = t.match(/DD[+\-]?D[+\-]?[0-9]+/), d = t.match(/DD[+\-]?WW[0].+[0-9].+[0-9]./), m = t.match(/DD[+\-]?D[+\-]?\d+/);
        n && (e = n[1] + "", t = n[2] + "", i = n[3] + "", h = n[4] + "", f = n[5] + ""), 
        e && (n = (r ? e[0] : e[3]) + "", i = (r ? i[0] : i[3]) + "", h = (r ? h[0] : h[3]) + "", 
        f = (r ? f[0] : f[3]) + "", d = (r ? d[0] : d[3]) + "", m = (r ? m + " " : "") + e + "", 
        a = e + i + f, o = t + h + d, s = n + l + a;
    }
}
;
var NISLParameter0 = true;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
