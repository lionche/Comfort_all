var NISLFuzzingFunc = function(a) {
    var c = this, d = c.getActiveEditor(), b = c.getActiveEditor();
    if (b) {
        b.setActiveEditor(a);
    }
    if (d) {
        d.setActiveEditor(a);
    }
    return a;
}
;
var NISLParameter0 = 8512.1704330732494036;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
