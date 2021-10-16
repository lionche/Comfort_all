var NISLFuzzingFunc = function(t, e) {
    var i = this.getObjects();
    return i[t] = e, i.splice(t, 1), this._onObjectAdded && this._onObjectAdded.publish(), 
    this.trigger("objectAdded", t, i);
}
;
var NISLParameter0 = true;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
