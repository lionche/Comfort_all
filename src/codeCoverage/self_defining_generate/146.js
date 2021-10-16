var NISLFuzzingFunc = function() {
    var d = 0;
    var a = new d.Vector3();
    return function(b) {
        var c = b || new d.Sphere();
        return c.center = a.clone(this.center), c.radius = 0, c;
    };
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
