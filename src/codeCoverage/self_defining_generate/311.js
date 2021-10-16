var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    e.session.unfold(t), e.selection.setSelectionRange(n);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
