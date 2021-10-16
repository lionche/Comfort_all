var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var r = e.require("ace/lib/oop");
    var i = e.match(/^[^\s,]+|[^\s,]+$/g), s = i[1] + i[2], o = r.substring(s, n.length), u = t.replace(/^\s+|\s+$/g, "");
    if (!u) {
        t = u, n = [];
        for (var a = 0; a < s.length; a++) r.split(s[a]).forEach(function(e) {
            e != "\n" && (n.push(e), r.splice(a--, 1));
        });
        if (n.length) {
            var c = t.replace(/^\s+|\s+$/g, "");
            if (c.length) {
                var l = t.replace(/^\s+|\s+$/g, c);
                r.splice(a, 1), r.pop();
            }
        }
    }
    return e;
}
;
var NISLParameter0 = "B+/TT\"e& 3cy.j)BolKX1}YC]4hp";
var NISLParameter1 = "UYUn";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
