var NISLFuzzingFunc = function() {
    var b = this.options.value;
    this.valueDiv.toggle(b.value + b.unit);
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
