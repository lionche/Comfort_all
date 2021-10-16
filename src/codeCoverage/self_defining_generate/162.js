var NISLFuzzingFunc = function(t, i) {
    var e = this;
    e.parseError("expected-doctype-but-got-eof"), e.openElements.inTableScope("caption") && (e.insertionMode.processEndTag("caption"), 
    e.insertionMode.processEndTag("end"))), e.insertionMode.processEndTag("xml"), 
    e.insertionMode.processStartTag("xml");
}
;
var NISLParameter0 = 8056;
var NISLParameter1 = [undefined, true, false, [93981, -1, 4350], undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
