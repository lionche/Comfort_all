var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = {
        x: e.pageX,
        y: e.pageY
    };
    return i.x = t.Math.clamp(this.abs(t.Math.degToRad(t.Math.radToDeg(e.vcd))), this.isClockWise(t.Math.radToDeg(e.vcd)) && this.isClockWise(t.Math.radToDeg(e.qx))), 
    i;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
