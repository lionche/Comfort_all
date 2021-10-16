var NISLFuzzingFunc = function(e) {
    var t = this;
    var n = e.data;
    n.push(t.data.data), e.data = n, e.componentInstance.setDelegate(t.data);
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
