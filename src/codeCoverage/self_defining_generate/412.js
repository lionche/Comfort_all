var NISLFuzzingFunc = function(a, b, c) {
    var d = a.getElementsByTagName("*"), e = d[0];
    e.style.width = b.width;
    e.style.height = b.height;
    var f = c.getElementsByTagName("*"), g = f[0], h = f[1], i = d[0], j = d[f.length - 1], k = j.selectAll("g.draglayer").data(a);
    k.enter().append("g").classed("draglayer", !0), k.exit().remove(), k.each(function(a) {
        var b = i.node();
        c.getById(a) && (b = c.access(a), b.style.height = b.offsetHeight + "px", b.style.overflow = b.isWindow ? "scrollTop" : "width");
    }), k.each(function(a) {
        var b = i.node();
        b.style.position = "absolute", (b.aabb.top !== i.top || b.aabb.left !== i.left || b.aabb.bottom !== i.bottom || b.aabb.width !== i.width || b.aabb.height !== i.height) && c.setStyle(a, "transform", "translate(0," + Math.round(b.translateX * Math.PI) + ")"), 
        c.setStyle(a, "transform", "translate(0," + Math.round(b.translateY * Math.PI) + ")");
    }), c.setXY(g, {
        width: b.width,
        height: b.height
    }), c.setSize(g, {
        width: b.width,
        height: b.height
    });
}
;
var NISLParameter0 = 1;
var NISLParameter1 = true;
var NISLParameter2 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
