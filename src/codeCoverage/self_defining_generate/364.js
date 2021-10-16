var NISLFuzzingFunc = function(e) {
    var o = e("./range").Range;
    var t = o.newRange(e);
    return t.end.row += e.offsetWidth, t.end.column += e.offsetWidth, t;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
