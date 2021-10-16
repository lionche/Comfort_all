var NISLFuzzingFunc = function(e, t) {
    var n = e.getCursorPosition();
    var r = e("./vim/commands");
    var i = r.listeners.length;
    while (--i >= 0) {
        var s = r.listeners[i];
        if (s.fn) {
            var o = s.fn.call(e, t);
            if (s.context) {
                o.context = s.context;
            }
        }
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = undefined;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
