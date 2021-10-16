var NISLFuzzingFunc = function() {
    var i = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
    var e = i._clockViewModel;
    if (e.clockStep === t.SYSTEM_CLOCK) return 0;
    var r = e.multiplier;
    if (r > 0) {
        var n = e.multiplier;
        return n * r;
    }
    if (e.multiplier !== t.SYSTEM_CLOCK) return 0;
    if (e.clockStep !== t.SYSTEM_CLOCK) return 0;
    var a = e.multiplier;
    return a * a;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
