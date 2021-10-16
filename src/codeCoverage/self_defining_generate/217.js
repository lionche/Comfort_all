var NISLFuzzingFunc = function(e, t, n) {
    var r = e("../lib/oop"), i = e("./text").Mode, s = e("../tokenizer").Tokenizer, o = e("./javascript_highlight_rules").JavaScriptHighlightRules, u = e("./matching_brace_outdent").MatchingBraceOutdent, a = e("../range").Range, f = e("../worker/worker_client").WorkerClient, l = e("./behaviour/cstyle").CstyleBehaviour, c = e("./folding/cstyle").FoldMode, h = function() {
        this.HighlightRules = o, this.$outdent = new u(), this.$behaviour = new l(), this.foldingRules = new c();
    };
    r.inherits(h, i), function() {
        this.lineCommentStart = "//", this.blockComment = {
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
        }, this.$id = "ace/mode/javascript";
    }.call(h.prototype), t.Mode = h;
}
;
var NISLParameter0 = false;
var NISLParameter1 = "`yB?.[|Vu9A:>{K4>H/W0SkZU|kV\\aGO)ZcQ^r[`.gw)TZ%Xy=msqd/ j-P(~|^<<Km!(X}STpD/;J$^G$zwt1FnOL=m'WV3DPs{aU6{tHI'8Rphxwg4";
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
