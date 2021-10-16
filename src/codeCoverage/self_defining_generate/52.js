var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var n = r.def;
    var s = t.use(e("../lib/shared"));
    var r = s(e), i = n(e, !0);
    do {
        if (r.push(r.offset + 1), i.push(r.offset + 1), i.offset === r.offset) return i.offset = r.offset, 
        void (r = i.offset = r.offset + 1);
        t = i, i = n(i, !0);
    } while (!r.offset);
    return i.offset = r.offset + 1, r.offset <= e.length && (r.offset = r.offset + 1), t;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
