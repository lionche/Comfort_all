var NISLFuzzingFunc = function(t) {
    var e = {
        version: "3.5.17"
    };
    var r = 0;
    var n = t.longitude, i = t.latitude, a = r.east, o = r.west, s = n - a, l = i - a, u = e.document.createTextArea(i, 0, 0);
    u.height = 0;
    var c = u.width;
    return {
        longitude: n,
        latitude: s,
        zoom: l,
        maxZoom: o,
        minZoom: u
    };
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
