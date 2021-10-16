var NISLFuzzingFunc = function(t) {
    var e = this;
    e.parseError("expected-doctype-but-got-eof"), e.openElements.inTableScope("caption", {
        t: t
    }), e.insertionMode.processEOF();
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
