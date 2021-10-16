var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e("./vim/commands");
    var i = r.list.find("#text");
    i.length > 0 && (n.selection.selectLineStart(), t || r.insertChars(i.join("")), r.insertChars(e.getLine(n.selection.getLineStart()));
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
