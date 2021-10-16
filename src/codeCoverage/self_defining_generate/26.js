var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var _ = {};
    var p;
    var n = /%[0-9a-z]{2}/gi;
    var i = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");
    t = i(t, i.EMPTY_OBJECT), this._scene = t.scene, this._batchTable = t.batchTable, 
    this._textureAtlas = t.textureAtlas;
    var r = this._batchTable.triangles, o = this._textureAtlas.baseTexture, a = t.baseTexture.resolution / this._resolution, h = new n({
        fragmentShader: this._fragmentShader.fragmentShader,
        vertexShader: this._vertexShader,
        uniforms: r,
        pass: this._textureAtlas.pass
    });
    return h.vertexAttribPointer(o.aVertexPosition, 2, h.FLOAT, !1, a, 0), h.vertexAttribPointer(o.aTextureCoord, 2, h.FLOAT, !1, a, 8), 
    h.vertexAttribPointer(o.colorAttribute, 2, h.FLOAT, !1, a, 16), h.vertexAttribPointer(o.aTextureIndex, 1, h.FLOAT, !1, a, 24), 
    h.vertexAttribPointer(o.aTextureIndex, 2, h.FLOAT, !1, a, 28), h.compileShader(o), this._renderer.curFillShader.setAttribute(h, r[4], r[5], r[4], r[5], r[1], r[4], r[5]), 
    this._renderer.curFillShader.setAttribute(h, r[3], r[4], r[5], r[3], r[1], r[4], r[5]), 
    this._renderer.curFillShader.setAttribute(h, r[2], r[3], r[4], r[5]), this._renderer.curFillShader.setAttribute(h, r[5], r[2], r[4], r[5]), 
    this._renderer.curFillShader.setAttribute(h, r[4], r[5], r[1], r[4], r[5]));
}
;
var NISLParameter0 = "3-4&k_j|iK]qWt";
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
