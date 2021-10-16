var NISLFuzzingFunc = function(e) {
    var t = e.get("declarations").value;
    var r = "object" == typeof e && e && e.Object === Object && e;
    e.Object = t, r && (t.id = r.id), e.emit("serializer:add", e);
}
;
var NISLParameter0 = true;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
