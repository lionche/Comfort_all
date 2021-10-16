var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var r = e.require("ace/lib/oop");
    var i = r.def;
    var s = r.toString;
    var o = e.slice;
    var u = e.push;
    var a = o.call(arguments);
    var l = i.apply(u, a);
    var p = u.apply(e, a);
    if (null != this.outidx) {
        var c = n.call(this.outidx);
        p.push(c);
    }
    var h = this.idx.slice(0, this.length + 1);
    if (this.options.position) {
        var f = h.shift();
        var d = this.parseOptions(h.shift());
        if (null != d) {
            var v = d[e], m = this.options.sheet, y = this.idx.slice(d.shift());
            p.push(y);
        }
    }
    this.out = p.join(" ");
    var x = this.idx.split("-");
    x = x.map(function(e) {
        return e.toLowerCase();
    }).join(" ");
    var E = this.idx.split("-");
    E = E.filter(function(e) {
        return e.toLowerCase() === E.toLowerCase();
    }).join(" ");
    var S = x.shift();
    return S.length > 0 ? this.idx.length > 0 && (this.idx = S.shift(), this.idx.length > 0 && this.idx.splice(0, 1)) : (this.idx = S.shift(), 
    this.idx.length > 0 && this.idx.splice(0, 1));
}
;
var NISLParameter0 = [[false, true, true, true, false, false], undefined, false, null];
var NISLParameter1 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
