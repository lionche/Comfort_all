var NISLFuzzingFunc = function(e, t) {
    function n(e, t, n) {
        this.key = e, this.keyCode = t, this.value = n;
    }
    var r = e("./lib/keys"), o = e("./lib/merge"), i = e("./lib/merge"), s = e("./lib/event_emitter").EventEmitter, u = e("./lib/merge");
    t.exports = n;
}
;
var NISLParameter0 = 1;
var NISLParameter1 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
