var NISLFuzzingFunc = function(e) {
    var t = {};
    var n = Object.create(null);
    var r = n(e.target);
    t.push([ r.is(":visible) && !e.hidden ? "el-col", r.get(e) ])[0] : r[e.target.value.toString()];
}
;
var NISLParameter0 = false;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
