var NISLFuzzingFunc = function(t, e) {
    var i = e(19);
    var o = e(45);
    var t;
    var r, n = this;
    "string" != typeof t && (t = {
        url: t
    });
    try {
        for (var i = l(t.url), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            "string" == typeof a && (a = {
                url: a
            });
            var s = r = new Error("Cannot find module '" + t + "' from '" + x + "'");
            r.url = t.url, r.message = a, null != o && (r.message = o), n.addEventListener && (r.message = e), 
            n.addEventListener("downloadComplete", e), r.downloadComplete = t.downloadComplete, 
            r.downloadComplete.call(n));
        }
    } catch (t) {
        r = {
            error: t
        };
    } finally {
        try {
            o && !o.done && (t = i.return) && t.call(i);
        } finally {
            if (r) throw r.error;
        }
    }
}
;
var NISLParameter0 = true;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
