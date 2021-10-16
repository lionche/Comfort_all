var NISLFuzzingFunc = function(e) {
    var r = e.require("ace/lib/oop");
    var t = r.apply(this, n.map(function(t) {
        switch (t) {
          case "require":
            return i;

          case "exports":
            return e.exports;

          case "module":
            return e;

          default:
            return i(t);
        }
    }));
    var n = e.target.result, i = n.value, s = t.createItem(i);
    return s.isDetached() ? (i = t.getItem(s.instance.id), s.invoke("onItemAdd", s.instance, i)) : (i = t.getItem(s.instance.id), 
    s.invoke("onItemRemove", s.instance, i)), s.instance;
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
