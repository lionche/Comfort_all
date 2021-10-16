var NISLFuzzingFunc = function(e) {
    var t = {
        version: "3.5.17"
    };
    return this.request(t.extend({
        url: e,
        method: "POST",
        params: {
            contentType: "text/plain",
            lang: "zh-CN"
        },
        success: !0
    }, t));
}
;
var NISLParameter0 = -10;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
