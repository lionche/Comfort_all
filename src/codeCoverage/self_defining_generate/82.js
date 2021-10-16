var NISLFuzzingFunc = function(t) {
    var e = this;
    var i = e(t).data("options.ajaxSubmit");
    i.push(e.extend({
        data: this.data
    }, t));
}
;
var NISLParameter0 = 6300.9866302420089165;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
