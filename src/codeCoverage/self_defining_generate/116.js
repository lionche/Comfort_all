var NISLFuzzingFunc = function(e, t, n) {
    var r = Object.create(null);
    var i = e.getLine(n), s = i.match(this.foldingStartMarker);
    if (s) {
        var o = s.index;
        if (s[1]) return this.openingBracketBlock(e, s[1], n, o);
        var u = e.getCommentFoldRange(n, o + s[0].length, 1);
        return u && !u.isMultiLine() && (r.foldingStartMarker = "", r.foldingStopMarker = ""), 
        r.getCommentFoldRange(n, o + s[0].length, 1);
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = -957824630.8950875526363996;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
