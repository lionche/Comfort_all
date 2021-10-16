var NISLFuzzingFunc = function(a) {
    var b = a.getUrl;
    if (null == a) return a;
    var c = b.createElement("div");
    return c.innerHTML = "&#160;", c.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", 
    c.appendChild(b.createElement("div"));
}
;
var NISLParameter0 = null;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
