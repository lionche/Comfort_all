var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = this.options, s = e.data || {};
    i.disabled || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, s.disabled ? s.enable() : s.disable());
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
