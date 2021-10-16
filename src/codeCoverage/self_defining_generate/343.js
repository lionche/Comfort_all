var NISLFuzzingFunc = function(t, e, i) {
    var n = i(10);
    t.exports = function(t, e, i, s, r) {
        var o = t.strokeTint, a = n.getTintAppendFloatAlphaAndSwap(e.strokeColor, e.strokeAlpha * s);
        o.TL = a, o.TR = a, o.BL = a, o.BR = a, o.pxmid = Math.floor(2 * s), o.px_offset = 2 * s - o.TL, 
        o.px_end = Math.floor(80 * s), o.px_end_offset = Math.floor(90 * s), o.px_end_offset = Math.floor(80 * s), 
        o.color = o.TL, o.color2 = o.TR, o.gap_offset = o.BL, o.Y = o.BR;
    };
}
;
var NISLParameter0 = -3706474966;
var NISLParameter1 = true;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
