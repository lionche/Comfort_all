var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e("./vim/commands");
    var i = e.getLine(n.row), s = i.substring(n.column, n.column + 1);
    if (t == undefined) {
        var o = e.session.getFoldAt(n.row, n.column);
        o.end.row = n.row + 1, o.end.column = n.column, e.session.foldAll(r, s);
    } else o = e.session.getFoldAt(n.row + 1, n.column + 1);
    e.moveCursorTo(o.end.row, o.end.column);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
