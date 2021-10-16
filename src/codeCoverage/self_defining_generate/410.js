var NISLFuzzingFunc = function() {
    var t = {
        version: "3.5.17"
    };
    return t.extend({
        type: this.type,
        source: this.source,
        id: this.id,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        zoom: this.zoom,
        preserveAspectRatio: this.preserveAspectRatio,
        rotation: this.rotation,
        data: this._data
    });
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
