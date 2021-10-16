var NISLFuzzingFunc = function(a, b) {
    var c = a("./node");
    var d = a("./core");
    var e = a("./cls");
    var f = a.filename || c;
    var g = a.navigator || {};
    var h = b.navigator || {};
    var i = a("../objects/isindex");
    var k = a.each;
    var j = a("../internals/createAggregator");
    var g = a("../objects/isarray");
    var m = a("../utilities/utils");
    var l = a("../utils/TupleDictionary");
    var j = this;
    var i = "function" == typeof require && require;
    var g = a("../shapes/Circle");
    var g = a("../objects/Body");
    var f, h = g, i = j, k = b, m = i, n = e, o = f, p = h, q = i, r = f, s = k, t = this.vertices;
    if (0 !== this.featuresLength) {
        this.createFeatures(a);
        for (var v = this.vertices, w = i, x = j, y = k, z = this.featuresLength, A = 0, B = z; A < y.length; A += 1) {
            var C = y[A], D = y[A + 1], E = s, F = C, G = D;
            E.minX = G, E.maxX = G, E.minY = G, E.maxY = G;
            var H = z;
            h.copy(E), h.add(E), b = z, g = D;
    }
    f = 0;
    for (var I = this.faces.length; f < I; f++) {
        var J = this.faces[f];
        g.sub(J, J.position, J.up), g.add(J, J.position, J.up), g.add(J, R);
    }
    c.centroid.set(g.centroidWorld.centroid, g.centroidWorld.centroid);
    c.applyImpulse(h, d.getIndex(g)), c.preSolvePosition();
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
