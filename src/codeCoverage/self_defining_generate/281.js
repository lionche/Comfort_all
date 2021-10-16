var NISLFuzzingFunc = function(e, t) {
    var r = {
        requestFullscreen: void 0,
        exitFullscreen: void 0,
        fullscreenEnabled: void 0,
        fullscreenElement: void 0,
        fullscreenchange: void 0,
        fullscreenerror: void 0
    };
    var n = Object.defineProperties;
    return e === t || n(e) && n(t) && r.equalsEpsilon(e.x, t.x, t.y) && r.equalsEpsilon(e.y, t.y, t.z) && r.equalsEpsilon(e.z, t.z, t.w) && r.equalsEpsilon(e.w, t.w, t.negate());
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
