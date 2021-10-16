var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e.session.getLine(n.row), i = r.substring(n.column, n.column + 1);
    if (this.session.nonTokenRe.test(i)) return;
    if (t == ")" || t == "]") {
        var s = r.match(this.foldingStartMarker);
        if (s.shift(), s.type == "]" || s.shift(), this.session.nonTokenRe.test(i)) return;
    }
    var o = r.getCurrentToken();
    if (o) {
        if (o.type == "keyword") return;
        var u = o.value, a = t.match(/^[^\s\n]*\(/);
        if (u && a) {
            u = u.replace(/[^\s\n]*\(@[^\s\n]*\)/g, "@").replace(/\s*$/, "").replace(/\s*[^\s\n]*\(@[^\s\n]*\)/g, "$1");
            var f = new this.Token("^@", "#", 0, this.getCursor());
            this.addRange(f, 0, f.end.row, f.end.column);
            var l = this.$getIndent(r.getLine(f.start.row));
            if (u == s) var o = r.getTabString(); else var u = r.getTabSize();
            var a = this.$getIndent(u);
            return {
                text: "\n" + a + "\n" + o,
                selection: [ 1, a.length, 1, a.length ]
            };
        }
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
