var NISLFuzzingFunc = function(e) {
    var o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelRequestAnimationFrame;
    return o ? (e.stopImmediatePropagation(), e.preventDefault(), !0) : !1;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
