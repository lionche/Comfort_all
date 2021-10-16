var NISLFuzzingFunc = function(e) {
    var t = this;
    if (e) {
        var i = e.data;
        i.progress = 100, i.delay = 0, i.repeat = 0, i.repeatCount = 0, i.playbackRate = e.playbackRate, 
        i.isPlaying = !1, i.data = e.generateMuted();
    }
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
