var NISLFuzzingFunc = function(a) {
    var b = this.getBounds(), c = this.x - b.x, d = this.y - b.y;
    this.width = a.x - this.x;
    this.height = a.y - this.y;
    this.halfWidth = Math.floor(this.width / 2);
    this.halfHeight = Math.floor(this.height / 2);
    this.offset.set(b.x, b.y);
    this.position.set(c, d, this.halfWidth);
    this.updateCenter();
    this.isCircle = false;
    this.radius = 0;
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
