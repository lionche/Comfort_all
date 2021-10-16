var NISLFuzzingFunc = function(e) {
    var t = {};
    return t.deprecated("stroke()", "setAttribute()"), this.setAttribute({
        strokecolor: e
    }), this;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
