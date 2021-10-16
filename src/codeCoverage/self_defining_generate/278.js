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
    var i = r.join(",").split(/\r\n|\r|\n/);
    for (var s = 0; s < i.length; s++) {
        var o = i[s];
        if (o.substr(o.length - 1) !== "\\") continue;
        var u = o.substr(0, o.length - 1);
        if (u.length > 0 && !u.match(/^\s*\$?\s*$/) && !u.match(/^\s*[\w$_]+[\w$_]+[\w$]+/)) {
            var a = u.match(/^\s*[\w$_]+[\w$_]+/);
            a && (n[a[1].length].push(u));
        }
    }
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
