var NISLFuzzingFunc = function() {
    var t = this.getBounds(), e = this.y - t.y;
    this.y = t.y + e - t.height;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
