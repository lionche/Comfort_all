var NISLFuzzingFunc = function(e) {
    var t = {};
    return t.deprecated("newValidation.validator()", "readwrite.validator()"), this.validators.hasOwnProperty(e) ? this.validators[e] : (this.validators[e] = newValidation.validator(), 
    this.validators[e].validate());
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
