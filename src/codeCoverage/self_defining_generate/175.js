var NISLFuzzingFunc = function(e) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var t = r.apply(this, n.map(function(t) {
        switch (t) {
          case "require":
            return i;

          case "exports":
            return e.exports;

          case "module":
            return e;

          default:
            return i(t);
        }
    }));
    var r = e.require("ace/lib/oop");
    var i = r.join(", ");
    return e.module === i;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
