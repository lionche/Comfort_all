var NISLFuzzingFunc = function(a, b) {
    var c = {};
    c.log("widget: event proxy added: " + a.name()), this.triggerFromWidget("eventadd", b, a);
}
;
var NISLParameter0 = 1122064.04779676048901094;
var NISLParameter1 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
