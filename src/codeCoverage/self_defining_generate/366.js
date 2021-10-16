var NISLFuzzingFunc = function() {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var t = Object.freeze;
    var r = t.unpack(e, 0, e.length);
    return r.texture = t.clone(r.texture), r;
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
