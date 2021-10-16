var NISLFuzzingFunc = function(t) {
    var o = {};
    return o.DomUtil.create("div", o.Util.table([ t ]), {
        id: t,
        style: "",
        name: t.name,
        role: t.role
    });
}
;
var NISLParameter0 = [-96, -3546, -7336, -1085645];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
