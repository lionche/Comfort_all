var NISLFuzzingFunc = function(t) {
    var u = {};
    var e = this.props.hitSlop;
    var n = e(this.props.children), r = e(this.props.style), i = e(this.props.onScroll);
    return t.contentDocument || t.contentWindow.document || t.contentDocument.body || t.contentWindow.body;
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
