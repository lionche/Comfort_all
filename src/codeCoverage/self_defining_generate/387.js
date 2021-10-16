var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = this.options, s = i.visibleItems, n = t(i.stack, s), o = n.length;
    e = e ? e : t(i.stack, s), o && !i.arrayOk && (e = !1);
    for (var r = 0; r < o; r++) if (e) return !0;
    return !1;
}
;
var NISLParameter0 = [false, true, undefined, null, undefined, false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
