var NISLFuzzingFunc = function(t) {
    var e = this.fetch({
        responseType: "text",
        headers: {
            Accept: "application/json,*/*;q=0.01"
        }
    });
    var r = e.get("declarations").value;
    t.ok(r.explicit(t.get("left")), "explicit left");
    t.explicit(t.get("right")) && t.push("right", "left", 0), t.push("top", "right", 0), 
    t.push("bottom", "center", 0);
}
;
var NISLParameter0 = [true];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
