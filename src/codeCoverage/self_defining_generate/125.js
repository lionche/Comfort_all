var NISLFuzzingFunc = function() {
    this.isEnabled = !0, this.isDown = !1, this.isUp = !0, this.timeDown = 0, 
    this.duration = 0, this.repeats = 0, this.value = null, this.onDown = null, this.onUp = null, 
    this._justDown = !1;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
