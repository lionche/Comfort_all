var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e.session.getLine(n.row), i = r.substring(n.column, n.column + t);
    if (this.session.nonTokenRe.test(i)) return;
    var s = new o(e, n.row, n.column + t), u = this.session.nonTokenRe.exec(i), a = this.session.tokenRe.lastIndex;
    if (a > u.index) return;
    var f = a - u.index;
    if (r == "{") {
        var l = u.substring(n.column).match(/\{([^}]*)\}/);
        l && (n.column = l[1].length), r = l[0].length;
    } else r = "}", u = this.session.nonTokenRe.lastIndex;
    var c = this.session.tokenRe.exec(r);
    return {
        type: (u ? "text" : "endTag", i).type,
        range: u,
        text: l
    };
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
