var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var r = e.require("ace/lib/oop");
    var i = e.property, s = e.value;
    if (!i[r.value]) {
        var o = s.indexOf(i[r.value]) + 1;
        o > -1 && (n[r.value] = s.substr(o), i[r.value].push(n[r.value]));
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
