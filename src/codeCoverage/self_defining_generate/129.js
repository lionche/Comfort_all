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
    var i = function(n) {
        return e.require(t, n);
    };
    var r = e.require("ace/lib/oop");
    var s = e.property, o = e.value, u = i(s);
    return r.test(o) ? u + u.split(".")[0] : o;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
