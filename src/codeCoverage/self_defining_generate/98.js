var NISLFuzzingFunc = function(e) {
    var S = function(e, t) {
        return t.querySelectorAll(e);
    };
    var t = S(e, "previousSibling");
    if (!t) {
        var n = t.parentNode;
        return n && n.nodeType === 3 && n.getAttribute("data-mce-bogus") === 1;
    }
    return !1;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
