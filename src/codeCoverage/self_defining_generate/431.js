var NISLFuzzingFunc = function() {
    var n = Object.create(null);
    return n.prototype.updateMatrixWorld.call(this, !0), this.matrixWorld.decompose(a, b, c), 
    this;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
