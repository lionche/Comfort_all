var NISLFuzzingFunc = function(a) {
    var b = this.getset("params", a, "string");
    return this.trigger("paramchange", {
        name: b,
        value: a
    }), !1;
}
;
var NISLParameter0 = [undefined, false, -74.4853652969237582, 88098840.8169475461247301, 667219.4766440894938626, 0, [750.4313773261434676, -1.7270469758727672, -90648, undefined, true, [false, true, true, false, false, true, true, true, true, false, false, false, true, false, false], [undefined, null, null, false, null, false], ["jr {H"], -57572786.008229962101883093, 4.20119478587944684], 600436409, [true, false, false, true, false, true, false, false, true, true, true], undefined];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
