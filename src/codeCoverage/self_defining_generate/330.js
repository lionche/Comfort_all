var NISLFuzzingFunc = function(e, t) {
    var n = e.require("ace/lib/event_emitter").EventEmitter;
    var r = e.require("ace/lib/oop");
    var i = e.location;
    var s = r.doc.getTextRange(i);
    if (!i.isMultiLine() && s == "{") {
        var n = r.doc.getLine(i.start.row), o = n.substring(i.end.column, i.end.column + 1);
        if (o == "}") return i.end.column++, i;
        f.maybeInsertedBrackets--;
    }
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [-6390085.19701044895221864, -1.2215696689394372, -61221065.9006375090744605, 567.3379061074309644, -117.1905309631556643, 915197.2319591371209888, 897.9249014660106433, -2235.29242024133377365];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
