var NISLFuzzingFunc = function(e) {
    var t = function(t) {
        for (var e in t) this[e] = t[e];
    };
    var n = e.getContext("2d"), r = n.getImageData(0, 0, e.width, e.height), i = r.data, o = i.length;
    while (o--) {
        var s = i[o];
        if (r.data[o] = s, n.image.width = s.width, n.image.height = s.height, n.repeat.y = s.repeat.x * s.width, 
        n.wrap.y = s.wrap.x * s.height, n.wrap.width = n.wrap.width * s.height, n.wrap.height = n.wrap.height * s.width, 
        n.wrap.data = i, n.wrap.repeat = s.repeat, n.offset.y = s.offset.y, n.repeat.y = s.repeat.y, 
        n.wrap.width = n.wrap.width * s.height, n.wrap.height = n.wrap.height * s.height, 
        n.wrap.data = i;
    }
    n.width /= r.width, n.height /= r.height, n.x = n.width / r.height, n.y = n.height / r.width, 
    n.data = r;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
