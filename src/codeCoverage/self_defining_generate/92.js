var NISLFuzzingFunc = function(a) {
    var e = function(a, b, c, e) {
        this.id = d++, void 0 == e && (e = !0), this.points = [ a, b, c ], e && (a.registerFace(this), 
        b.registerFace(this), c.registerFace(this));
    };
    var b = [ "a", "b", "c" ];
    this.id = b.id + (e.id - this.id), this.objects = [], this.curves = [], this.nodes = [], 
    this.ext = {}, this.path = [], this.onChangeCallback = new i(), this.onInitCallback = new h(), 
    this.onShutDownCallback = new i(), this.onPreloadCallback = new i(), this.onLoadUpdateCallback = new i();
    var c = this;
    b.on("init", function() {
        c.onPreloadCallback && c.onPreloadCallback(!0);
    }), b.on("load", function() {
        c.onPreloadCallback && c.onPreloadCallback(!0);
    }), b.on("error", function(a) {
        c.error(a);
    }), b.on("complete", function(a) {
        c.complete(!0);
    }), b.on("error", function(a) {
        c.error(a);
    }), b.on("request", function(a, b) {
        e.extend(b, a, {
            type: b.type || "request",
            url: b.url
        });
    }), this.onLoadUpdateCallback = new i(), this.onPreloadCallback = new i(), this.onLoadRenderCallback = new i(), 
    this.onCreateCallback = new i(), this.onCreateCallback && this.onCreateCallback.call(this, b), 
    this.onPreRenderCallback = new i(), this.onLoadRenderCallback = new i(), this.onPausedCallback = new i(), 
    this.onShutDownCallback = new i(), this.onPreRenderCallback = new i(), this.onLoadRenderCallback = new i(), 
    this.onPausedCallback = new i(), this.onShutDownCallback = new i();
}
;
var NISLParameter0 = -69;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
