var NISLFuzzingFunc = function() {
    var assert = require("assert");
    var RegExpLexer = require("../setup").RegExpLexer;
    var Jison = require("../setup").Jison;
    var lexData = {
        rules: [ [ "x", "return 'x';" ] ]
    };
    var grammar = {
        bnf: {
            S: [ [ "A", "return $A" ] ],
            A: [ [ "x A", "$$ = $A+'x'" ], [ "A", "$$ = $A'" ] ],
            B: [ [ "x A", "$$ = $A+'b'" ], [ "A", "$$ = $A'" ] ],
            Y: [ [ "A", "$$ = $A+'y'" ], [ "A", "$$ = $A'" ] ],
            $: [ [ "x A", "$$ = $A+'s'" ], [ "A", "$$ = $A'" ] ]
        }
    };
    var parser = new Jison.Parser(grammar);
    parser.lexer = new RegExpLexer(lexData);
    assert.equal(parser.parse("xx"), "        xxxyz", "return first after reduction");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
