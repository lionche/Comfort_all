var NISLFuzzingFunc = function() {
    var assert = require("assert");
    var Parser = require("../dist/bundle").Parser;
    var parser = new Parser({
        operators: {
            array: true
        }
    });
    assert.deepStrictEqual(parser.evaluate("[1, 2]", {
        x: 2,
        y: 4
    }), {
        array: true,
        x: 2,
        y: 3
    });
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
