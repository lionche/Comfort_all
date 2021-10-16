var NISLFuzzingFunc = function(a, b, c, d) {
    var e = function(a, b, c, e) {
        this.id = d++, void 0 == e && (e = !0), this.points = [ a, b, c ], e && (a.registerFace(this), 
        b.registerFace(this), c.registerFace(this));
    };
    e.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
        radius: a,
        segments: b,
        thetaStart: c,
        thetaLength: d
    }, this.fromBufferGeometry(new e.TorusBufferGeometry(a, b, c, d));
}
;
var NISLParameter0 = "FQrVY|81Kfrd%x/kZ!*-*Ff=P.#UfhR%[qreD<b?TUT5=LuFUgG~ngH2;9}G<!i#q]NFu}fVxW9x=`}Lk\\\\Ma9IoMl-_>v*|e(%HsQqq Z@1hk;";
var NISLParameter1 = 0.8048562234872643;
var NISLParameter2 = 33564238.9875972459605519;
var NISLParameter3 = 609546491.04368364089669541;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2, NISLParameter3);
print(NISLCallingResult);
