var NISLFuzzingFunc = function(t, e, i) {
    var n = i(0), s = i(24), r = i(7), o = i(96), a = i(8), h = i(2), l = i(6), u = new n({
        Extends: h,
        initialize: function(t, e, i, n) {
            var s = "xml";
            if (l(e)) {
                var o = e;
                e = a(o, "key"), i = a(o, "url"), n = a(o, "xhrSettings"), s = a(o, "extension", s), 
                o = a(o, "dataKey", "urlKey"), i = a(o, "frameKey", "frame"), n = a(o, "frameWidth", 0), 
                s = a(o, "frameHeight", n), o = a(o, "frameOffset", 0), i = a(o, "width", 0), 
                n = a(o, "height", 0);
            }
            var c = {
                type: "image",
                cache: t.textureManager,
                extension: s,
                responseType: "blob",
                key: e,
                url: i,
                xhrSettings: n,
                config: o
            };
            r.call(this, t, c);
        },
        onProcess: function() {
            this.state = s.FILE_PROCESSING, this.data = this.xhrLoader.responseText, this.onProcessComplete();
        }
    });
    o.register("image", function(t, e, i) {
        if (Array.isArray(t)) for (var n = 0; n < t.length; n++) this.addFile(new u(this, t[n])); else this.addFile(new u(this, t, e, i));
        return this;
    }), t.exports = u;
}
;
var NISLParameter0 = [414546034.5610800846695269, "$/>B ^V\\R>a?5ZqaJUFyWf|FGNgA8ah<.dd@&7nZX:fb#\\l", 1.5070803993201066];
var NISLParameter1 = 1;
var NISLParameter2 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
