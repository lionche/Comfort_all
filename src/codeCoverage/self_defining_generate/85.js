var NISLFuzzingFunc = function(a) {
    var c = a("./utils").addDataAttr;
    var b = a.document;
    var d = a("./browser");
    var e = a("../less/environment/abstract-file-manager.js");
    var f = a.filename || c;
    var g = new b.JavaScript(a);
    g = f.eval(b), a.addHelper("new_label", g.label.escaped, g.output);
    return g.output.data.push(a.parse(g.output.data)), a.languages.insert("string", [ g.name, "q", "new_label", "new_label", "q" ]);
}
;
var NISLParameter0 = [-9];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
