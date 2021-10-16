var NISLFuzzingFunc = function(e) {
    var t = this;
    function n(r) {
        return function(t) {
            return e.findDOMNode(t, n);
        };
    }
    return {
        findDOMNode: n,
        findDOMNodeList: e
    };
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
