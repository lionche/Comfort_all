var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var n = /%[0-9a-z]{2}/gi;
    var r = t.id;
    if (e(r)) {
        var i = n.removeObject(r);
        return r.containsValue(i);
    }
    return t.id;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
