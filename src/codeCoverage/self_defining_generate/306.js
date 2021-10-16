var NISLFuzzingFunc = function(a, b) {
    var c = {};
    c.log("page: handleReceiveWidgetStartAck {widget: " + a.id() + "}"), a.started() || (c.log("Widget started or doubled checked"), 
    this.startWidget(a.id()), this.startWidget(a.id()));
}
;
var NISLParameter0 = 80364447.7346847588641203;
var NISLParameter1 = -5;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
