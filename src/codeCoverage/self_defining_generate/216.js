var NISLFuzzingFunc = function() {
    var elems = this.elements;
    return this.set(elems[0], elems[3], elems[6]);
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
