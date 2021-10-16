var NISLFuzzingFunc = function(e, t) {
    var n = {
        clone: function(e) {
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t;
        },
        cloneArray: function(e) {
            for (var t = [], i = 0; i < e.length; i++) t.push(n.clone(e[i]));
            return t;
        },
        cloneHashOfHash: function(e) {
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[i] = n.clone(e[i]));
            return t;
        },
        cloneHashOfArrayOfHash: function(e) {
            var t = {};
            for (var i in e) e.hasOwnProperty(i) && (t[i] = n.cloneArray(e[i]));
            return t;
        },
        gsub: function(e, t, i) {
            return e.split(t).join(i);
        },
        strip: function(e) {
            return e.replace(/^\s+/, "").replace(/\s+$/, "");
        },
        startsWith: function(e, t) {
            return 0 === e.indexOf(t);
        },
        endsWith: function(e, t) {
            var i = e.length - t.length;
            return i >= 0 && e.lastIndexOf(t) === i;
        },
        each: function(e, t, i) {
            for (var n = 0, r = e.length; n < r; n++) t.apply(i, [ e[n], n ]);
        },
        last: function(e) {
            return 0 === e.length ? null : e[e.length - 1];
        },
        compact: function(e) {
            for (var t = [], i = 0; i < e.length; i++) e[i] && t.push(e[i]);
            return t;
        },
        detect: function(e, t) {
            for (var i = 0; i < e.length; i++) if (t(e[i])) return !0;
            return !1;
        }
    };
    var i = 0;
    i.push(e), n++;
}
;
var NISLParameter0 = "~v2=fc>FH-rv.W:bH-ZTFd2j";
var NISLParameter1 = [81673];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
