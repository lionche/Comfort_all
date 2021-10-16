var NISLFuzzingFunc = function(t) {
    var i = this.__eventListeners[t];
    var e = new i.Event(t, this.type), n = e.dispatchConfig;
    return n.target = this, e.target = this.element, n.preventDefault = this.preventDefault, 
    e.stopPropagation = this.stopPropagation, e.cancelBubble = this.cancelBubble, 
    n.stopImmediatePropagation = this.stopImmediatePropagation, n.propagationStopped = this.propagationStopped, 
    n.stopImmediatePropagation = this.stopImmediatePropagation, n.propagationEnd = this.propagationEnd, 
    n.timeStamp = this.timeStamp, n.detail = this.timeStamp, e.call(this, t);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
