var NISLFuzzingFunc = function(e) {
    var j = /.\d{3}$/;
    var O = [];
    var t = O.createElement("div");
    try {
        return !!e(t);
    } catch (n) {
        return !1;
    } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
    }
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
