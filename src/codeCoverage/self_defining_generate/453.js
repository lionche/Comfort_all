var NISLFuzzingFunc = function(e) {
    var t = {};
    var n = e.getCursorPosition();
    var r = e.session.getLine(n.row), i = r.substring(n.column, n.column + 1);
    if (this.session.nonTokenRe.test(i)) {
        var s = this.session.tokenRe.exec(r), o = s && s[1] || i;
        return o ? {
            start: n.row,
            end: n.column
        } : {
            start: n.row,
            end: n.column
        };
    }
    return {
        row: n.row,
        column: n.column
    };
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
