var NISLFuzzingFunc = function(e, t, n) {
    "use strict";
    var r = e("../lib/oop"), i = e("./text").Mode, s = e("./javascript_highlight_rules").JavaScriptHighlightRules, o = e("./matching_brace_outdent").MatchingBraceOutdent, u = e("../worker/worker_client").WorkerClient, a = e("./behaviour/cstyle").CstyleBehaviour, f = e("./folding/cstyle").FoldMode, l = function() {
        this.HighlightRules = s, this.$outdent = new o(), this.$behaviour = new u(), this.foldingRules = new f();
    };
    r.inherits(l, i), function() {
        this.foldingRules = "cStyle", this.blockComment = {
            start: "/*",
            end: "*/"
        }, this.getNextLineIndent = function(e, t, n) {
            var r = this.$getIndent(t), i = this.getTokenizer().getLineTokens(t, e), s = i.tokens, o = i.state;
            if (s.length && s[s.length - 1].type == "comment") return r;
            if (e == "start" || e == "no_regex") {
                var u = t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/);
                u && (r += n);
            } else if (e == "doc-start") {
                if (o == "start" || o == "no_regex") return "";
                var u = t.match(/^\s*(\/?)\*/);
                u && (u[1] && (r += " "), r += "* ");
            }
            return r;
        }, this.checkOutdent = function(e, t, n) {
            return this.$outdent.checkOutdent(t, n);
        }, this.autoOutdent = function(e, t, n) {
            this.$outdent.autoOutdent(t, n);
        }, this.createWorker = function(e) {
            var t = new f([ "ace" ], "ace/mode/javascript_worker", "JavaScriptWorker");
            return t.attachToDocument(e.getDocument()), t.on("jslint", function(t) {
                e.setAnnotations(t.data);
            }), t.on("terminate", function() {
                e.clearAnnotations();
            }), t;
        }, this.$id = "ace/mode/javascript";
    }.call(l.prototype), t.Mode = l;
}
;
var NISLParameter0 = false;
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
