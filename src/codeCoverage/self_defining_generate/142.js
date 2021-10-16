var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    this.game = a, this._enabled = !0, this.event = null, this.isDown = !1, this.isUp = !0, 
    this.altKey = !1, this.ctrlKey = !1, this.shiftKey = !1, this.timeDown = 0, this.duration = 0, 
    this.repeats = 0, this.keyCode = b, this.onDown = new c.Signal(), this.onHoldCallback = null, 
    this.onHoldContext = null, this.onDownSound = null, this.onHoldCallbackContext = null;
}
;
var NISLParameter0 = undefined;
var NISLParameter1 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
