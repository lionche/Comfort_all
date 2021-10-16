var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var r = t.frictionEquations.length - 1;
    if (r > 0) {
        this.setSlipForce(0, t);
        for (var i = 1; i < r; i++) e.setSlipForce(i, t);
    }
}
;
var NISLParameter0 = 25294594.05437304472714921;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
