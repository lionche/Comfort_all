var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = 0;
    var s = "absolute" === i;
    var n = 0;
    var a = e.cleanData;
    return e ? (a.each(n, function(e, i) {
        var t = n.getDatasetMeta(i);
        n.isDatasetVisible(i) && t.hidden && s(t.getValueAsString(e)), t.update();
    }), t.update) : void 0;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
