var NISLFuzzingFunc = function(a) {
    var b = this.getBounds(this.parent), c = this.x - b.x;
    this.x = a + c - b.width;
}
;
var NISLParameter0 = 337370;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
