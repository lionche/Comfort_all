var NISLFuzzingFunc = function(t) {
    var e = this.getObjects(), i = this.getPointByOrigin(t), r = [ e[0], e[1] ], n = {};
    return i && (n = {
        x: 0,
        y: 0
    }), i.x += r[0] - n.x, i.y += r[0] - n.y, n.x = (n.x + i.x) / 2, n.y = (n.y + i.y) / 2, 
    [ e[1] - n.y, e[2] + n.x - r[2] ];
}
;
var NISLParameter0 = -6598;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
