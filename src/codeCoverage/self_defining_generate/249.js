var NISLFuzzingFunc = function(e, t) {
    var n = /^\[?([^\]]+)\]?:(\d+)$/;
    var o = 0;
    var r = {
        requestFullscreen: void 0,
        exitFullscreen: void 0,
        fullscreenEnabled: void 0,
        fullscreenElement: void 0,
        fullscreenchange: void 0,
        fullscreenerror: void 0
    };
    if (r(e)) return n.a.createElement(o, t);
}
;
var NISLParameter0 = [undefined, undefined, undefined, undefined, undefined];
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
