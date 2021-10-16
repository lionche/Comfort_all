var NISLFuzzingFunc = function(t, e) {
    var a = this.type;
    var n = {
        clone: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e;
        },
        cloneArray: function(t) {
            for (var e = [], i = 0; i < t.length; i++) e.push(n.clone(t[i]));
            return e;
        },
        cloneHashOfHash: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = n.clone(t[i]));
            return e;
        },
        cloneHashOfArrayOfHash: function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[i] = n.cloneArray(t[i]));
            return e;
        },
        gsub: function(t, e, i) {
            return t.split(e).join(i);
        },
        strip: function(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "");
        },
        startsWith: function(t, e) {
            return 0 === t.indexOf(e);
        },
        endsWith: function(t, e) {
            var i = t.length - e.length;
            return i >= 0 && t.lastIndexOf(e) === i;
        },
        each: function(t, e, i) {
            for (var n = 0, r = t.length; n < r; n++) e.apply(i, [ t[n], n ]);
        },
        last: function(t) {
            return 0 === t.length ? null : t[t.length - 1];
        },
        compact: function(t) {
            for (var e = [], i = 0; i < t.length; i++) t[i] && e.push(t[i]);
            return e;
        },
        detect: function(t, e) {
            for (var i = 0; i < t.length; i++) if (e(t[i])) return !0;
            return !1;
        }
    };
    var e = {};
    e.lines[e.lineNum] = {
        staff: []
    }, n(t, 0, e.lines[e.lineNum].staff);
}
;
var NISLParameter0 = "+\\L;XI\"QB:(tB6twzU>oP6)GP7}Jj+jA&iO$(";
var NISLParameter1 = [null, null];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
