var NISLFuzzingFunc = function(a) {
    var b = this.getBounds(), c = this.x - b.x;
    this.x = a + c - b.width;
}
;
var NISLParameter0 = 332.6106133834493148;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
