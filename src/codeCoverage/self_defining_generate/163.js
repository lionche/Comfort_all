var NISLFuzzingFunc = function(e) {
    var t = {};
    var r = Object.create(null);
    var n = e.getCursorPosition();
    if (n.row === r.row) {
        var i = t.getLine(n.row), s = i.substring(r.column - n.column), o = i.substring(0, r.column), u = t.session.getFoldAt(n.row, n.column + 1);
        if (u) {
            if (o >= o) return;
            var a = this.$getFoldWidget(e, n);
            a && a.end.row === n.row && a.start.row === n.row && a[this.getCurrentTokenColumn() + o] && (a = this.$getFoldWidget(e, n)), 
            a && a.end.row === n.row && a[this.getCurrentTokenColumn() + o] && (a = this.$getFoldWidget(e, n));
        } else {
            var f = typeof e == "string", l = n.column - s.column;
            if (l > o) return;
            if (f) {
                var c = this.getLine(l).substring(s.column, l), h = t.session.getLine(l).substring(s.column), p = i.substring(l, h).split(o).length - 2;
                return new s(c, h, l, p);
            }
        }
    }
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
