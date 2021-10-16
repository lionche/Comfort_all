var NISLFuzzingFunc = function(t) {
    var e = this;
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    n.push(t.name), e.setProperty(t.name, t.value);
}
;
var NISLParameter0 = 1.9075448205432425;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
