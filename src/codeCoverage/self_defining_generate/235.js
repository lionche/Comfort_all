var NISLFuzzingFunc = function(c) {
    var a = {};
    var b;
    var d = function(a, b, c) {
        0 > c && (c += 1);
        1 < c && (c -= 1);
        return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a;
    };
    var e = Array.prototype.slice.call(arguments);
    e.geometry.type = d.Geometry.DYNAMIC, e.geometry.coordinates = c, e.geometry.vertices = [], 
    e.geometry.faces = [], e.geometry.faceVertexUvs = [ [] ];
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
