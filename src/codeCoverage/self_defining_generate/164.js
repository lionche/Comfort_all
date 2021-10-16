var NISLFuzzingFunc = function() {
    var e = this;
    return e.apply(this.models, arguments);
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
