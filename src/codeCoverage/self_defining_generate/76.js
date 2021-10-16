var NISLFuzzingFunc = function(e) {
    var t = this.getBoundingClientRect();
    if (t) {
        var n = t.getBoundingClientRect();
        n.left = n.left + n.width * this.getDeltaWsc(e), n.top = n.top + n.height * this.getDeltaWsc(e);
    }
    return this;
}
;
var NISLParameter0 = -64233.37487379239174456;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
