var NISLFuzzingFunc = function(e) {
    var o = {};
    var t = e.geometry;
    if (!t.isGeometry) throw new Error("Shape constructor's constructor method is not yet implemented");
    t.geometry = new o.Shape();
    var r = t.geometry;
    if (!r.isBufferGeometry) throw new Error("Buffer geometry's constructor method is not yet implemented");
    return t.geometry = r.createBuffer();
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
