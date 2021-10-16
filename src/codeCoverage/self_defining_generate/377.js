var NISLFuzzingFunc = function(t) {
    var e = 0;
    var i, s = e(t), n = e.data(t, "datepicker");
    s.hasClass(this.markerClassName) && (" " + (i = s.children("a").map(function(t) {
        return t.value;
    }).join(" ") + " ").indexOf(this.markerClassName) > -1 && (e.removeData(i, "datepicker"), 
    e(i).removeClass(this.markerClassName).removeData(this.markerClassName).removeData(t.value), 
    n.push(t)), " " + this.markerClassName);
}
;
var NISLParameter0 = 755.3241624267552937;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
