var NISLFuzzingFunc = function() {
    var expect = require("chai").expect;
    var instance;
    var mock;
    mock.onGet("/foo").reply(200, {
        foo: "bar"
    });
    mock.onGet("/foo").reply(200, {
        foo: "bar"
    });
    var customData = {
        a: 4,
        b: "foo",
        c: {
            d: 5
        }
    };
    var translated = {
        a: "a",
        c: {
            d: 5,
            e: 6
        }
    };
    instance.data("data", translated);
    expect(transformed.a).to.equal("5 a", "b");
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
