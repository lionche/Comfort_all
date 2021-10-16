var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var r = e.require("ace/lib/oop");
    var i = e.require("ace/lib/event_emitter").EventEmitter;
    var s = r.prototype;
    var o = e("./range").Range;
    var u = r.prototype;
    var a = e("./anchor").Anchor;
    var f = e("./anchor").Anchor;
    var n = e("./folding/cstyle").FoldMode;
    var l = e("./behaviour/xquery").XQueryBehaviour;
    var c = e("./folding/cstyle").FoldMode;
    var h = function() {
        this.HighlightRules = o, this.$outdent = new u(), this.$behaviour = new f(), this.foldingRules = new l();
    };
    var p = e("./matching_brace_outdent").MatchingBraceOutdent;
    var r = this._getFirstTagInLine(e, n);
    if (!r.match) return null;
    var i = r.closing || r.selfClosing, o = [], a;
    if (!i) {
        var f = new u();
        f.end.column = n.start.column + t[0], f.end.row = n.end.row, f.start.row = n.start.row;
        for (var l = 0; l < t.length; l++) {
            var c = t[l];
            if (!c.tagName) {
                var h = "";
                c.tagName.toLowerCase() !== c.toLowerCase() ? (h = c.value, a = h[0].length, c.removeAttribute("data-" + a)) : c.removeAttribute("data-" + a);
                if (c.getAttribute("data-" + a)) {
                    var p = c.getAttribute("data-" + a);
                    p = p.toLowerCase(), h = p === p ? p : h;
                }
                o.push(h);
            }
        }
        return o;
    }
    return this._signal("change", {
        data: t,
        item: r
    }), o;
}
;
var NISLParameter0 = "z4&i%I{'xnZp&O$om>@.E<m)S:eQB`_Y0{HO_rQ{I})S<\\";
var NISLParameter1 = [true, null, [null, null, null, null, null, null, null, null, null, null], false];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
