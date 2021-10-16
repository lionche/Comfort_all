var NISLFuzzingFunc = function(e) {
    var t = {
        version: "3.5.17"
    };
    var r = 0;
    return e.forEach(function(e) {
        r.push(e.longitude), r.push(e.latitude), r.push(e.longitude), -1 !== e.marker.sNormals.length && (t.elements[r.length] = r, 
        t.elements[r.length] = e.marker);
    }), r;
}
;
var NISLParameter0 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
