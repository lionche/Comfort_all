var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e.session.getLine(n.row), i = r.substring(n.column, n.column + t);
    if (this.removeFold(i), i == ")") {
        var s = e.session.getLine(n.row);
        if (s.substring(n.column).match(/^\s*$/) === 0) {
            var o = e.session.getLine(n.row).substring(0, n.column), u = e.session.getLine(n.row + 1).substring(n.column);
            o.length > u.length && (o = u.substring(0, n.column) + o + o);
        }
        e.session.removeFold(i), i = r.substring(n.column);
    }
    return this.$content.insert(i, t), i;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
