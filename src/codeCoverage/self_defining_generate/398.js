var NISLFuzzingFunc = function(e, t) {
    var r = e.getCursorPosition(), n = t ? r.row : r.column, i = e.session.getLine(n.row).length;
    e.selection.moveTo(n.row, n.column);
    if (e.session.isTabStop(n)) {
        var s = e.session.getTabSize();
        e.session.isTabStop(n) ? e.session.insert(n, i + 1) : e.session.insert(n, i + 1);
    } else e.selection.setSelectionRange(n);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
