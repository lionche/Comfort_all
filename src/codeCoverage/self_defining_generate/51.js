var NISLFuzzingFunc = function(e, t) {
    var o = e("./scss_highlight_rules").ScssHighlightRules;
    var s = e("../tokenizer").Tokenizer;
    var n = e.getLine(t), r = n.search(/\S/), s = t, o = n.length;
    t += 1;
    var u = t, a = e.getLength();
    while (++t < a) {
        n = e.getLine(t);
        var f = n.search(/\S/);
        if (f === -1) continue;
        if (r > f) break;
        var l = this.getFoldWidgetRange(e, "all", t);
        if (l) {
            if (l.start.row <= s) break;
            if (l.isMultiLine()) t = l.end.row; else if (r == f) break;
        }
        u = t;
    }
    return new i(s, o, u, e.getLine(u).length);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -2;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
