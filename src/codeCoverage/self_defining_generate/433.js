var NISLFuzzingFunc = function(e, t, n) {
    var r = this.getBinding(e);
    r && (r.keyword && (r = r.constantViolations.map(function(e) {
        return "constant" === e.kind && e.constantViolations.sort(function(e) {
            return e.constantViolations.indexOf(".") !== -1;
        }));
    }), this.hasOne(e, r)) {
        var i = this.getOne(e);
        i && i.references.push(t);
    }
}
;
var NISLParameter0 = false;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
