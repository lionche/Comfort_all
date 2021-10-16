var NISLFuzzingFunc = function(t) {
    var e = this;
    if (t) {
        var n = t.toString().split(".");
        n.length > 1 && (e = n[0] + "." + e);
    }
    return this._getList(e);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
