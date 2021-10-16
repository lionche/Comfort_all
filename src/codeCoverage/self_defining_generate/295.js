var NISLFuzzingFunc = function(t, e) {
    var i = t.x, n = t.y, r = t.width, o = t.height, a = t.radius, s = e.x, h = e.y;
    return i * s - n * o < .5 && (i *= o, n *= o), s = r + i, h = r + h, a = r * o - n * s, 
    "M" + a, s = h + a, h = i * o - n * s < .5 ? i * (1 - o) : i * (o * (1 - s) - i * i), 
    this.usrCoords[2] = s + a, this.usrCoords[3] = h + a, e.x = this.objects[0].X(), 
    e.y = this.objects[0].Y(), e.radius = this.objects[0].X() + this.objects[1].X(), e;
}
;
var NISLParameter0 = [null];
var NISLParameter1 = "'wv5yV_?/3aO1Lsodt\\^rU5[@v/403CVjQ;U/=%`dB?GXRmR";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
