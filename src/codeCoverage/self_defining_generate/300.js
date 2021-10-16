var NISLFuzzingFunc = function() {
    var e = this.getFrameData();
    return e && e.getFrameA().getX() < e.width && e.getFrameA().getY() < e.height ? {
        x: e.getLeft(),
        y: e.getTop()
    } : {
        x: e.getLeft(),
        y: e.getTop()
    };
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
