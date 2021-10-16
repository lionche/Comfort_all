var NISLFuzzingFunc = function(e, t, r) {
    var n = e.getCursorPosition(), i = t.doc.getLine(n.row), s = i.substring(n.column, n.column + 1);
    if (this.session.nonTokenRe.test(s)) return;
    var o = this.session.tokenRe.exec(i), u = this.session.tokenRe.lastIndex;
    if (!o || !u || u >= o.length) return;
    var a = o.slice(u, u + 1), f = this.$getIndent(a), l = a + o.slice(o.slice(0, u)), c = t.getTabString();
    if (c.slice(-1) == "\t") {
        var h = r.getTokenAt(n.row + 1, n.column);
        h && h.value == ">" && l.value != "text" ? l.value = "text" : h = r.getTokenAt(n.row + 1, n.column + 1), 
        l && h.value == "text" && c.value != "text" ? c.value = "text" : c = r.getTokenAt(n.row, n.column + 1);
    } else l && h && (r.remove(l), c = r.getTabString());
    r.setLast(c);
}
;
var NISLParameter0 = "|4p&@)Ep}=570\",Wc\"=T_r{0H^dg?nc4l";
var NISLParameter1 = 1;
var NISLParameter2 = -68105508;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
