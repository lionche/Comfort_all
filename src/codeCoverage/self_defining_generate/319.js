var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var r = t.x.toString(16), i = t.y.toString(16), n = e(t.x, t.y);
    if (0 !== n) {
        var o = r.length * n, a = r[o];
        return 1 === o ? "0" + i + a : a;
    }
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
