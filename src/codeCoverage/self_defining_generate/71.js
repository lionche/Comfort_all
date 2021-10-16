var NISLFuzzingFunc = function(a) {
    var b = this.getBounds(this.parent), c = this.x - b.x;
    this.x = a + c - b.width;
}
;
var NISLParameter0 = "f'T3pnJ1gCt&-fM:;Q6`caO$RMc/%Sdd_;emHR.p5JU&J#cHnyU%|*HI";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
