var NISLFuzzingFunc = function(e) {
    var a = {};
    var i = {};
    var r = Object.defineProperties;
    var t = Object.freeze;
    var n = {
        requestFullscreen: void 0,
        exitFullscreen: void 0,
        fullscreenEnabled: void 0,
        fullscreenElement: void 0,
        fullscreenchange: void 0,
        fullscreenerror: void 0
    };
    n.fromCartesian(e, i);
    var o = i.high, s = i.low;
    t(o) && (o.height = s.height, o.longitude = s.longitude, o.latitude = s.latitude, o.height = Math.min(s.longitude, s.latitude)), 
    t(o) && (o.height = Math.min(s.longitude, s.latitude)), t(o) && (o.longitude = Math.max(s.longitude, s.latitude)), 
    t(o) && (o.longitude = Math.max(s.longitude, s.latitude)), t(o) && (o.longitude = Math.max(s.longitude, s.latitude)), 
    o.height = Math.min(s.longitude, s.latitude)), o.height = Math.max(s.longitude, s.latitude);
    var l = o.height + o.longitude;
    return r(a) ? (a.west = l, a.south = l, a.east = l, a.north = l, a) : new i(l, l, l, l, l);
}
;
var NISLParameter0 = 664;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
