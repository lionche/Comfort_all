var NISLFuzzingFunc = function(node) {
    var nodes = require("../nodes");
    if (node.type === "class") {
        this.className = node.className;
    } else if (node.type === "function") {
        this.functionName = node.name;
    } else {
        this.functionName = node.name;
    }
    var node = nodes.get(node);
    if (node.type === "class") {
        this.className = node.type;
    } else if (node.type === "function") {
        this.functionName = node.name;
    }
}
;
var NISLParameter0 = [331517, -1, 2354989412, -61370545, 125403556, 65416, -223854680, -2163784];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
