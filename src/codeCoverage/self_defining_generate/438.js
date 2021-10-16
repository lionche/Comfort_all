var NISLFuzzingFunc = function(e) {
    var t = this;
    var i = this._getInst(e);
    i.selected = !0, t.push(i.value);
}
;
var NISLParameter0 = [undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
