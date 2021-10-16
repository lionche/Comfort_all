var NISLFuzzingFunc = function(t, e) {
    var n = this.getDOMNode().childNodes[this.root].childNodes[e];
    return !n && this.root === t;
}
;
var NISLParameter0 = false;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
