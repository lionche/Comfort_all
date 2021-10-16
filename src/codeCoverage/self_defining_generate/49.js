var NISLFuzzingFunc = function() {
    var assert = require("assert");
    var faker = require("../index");
    var weekday = faker.date.weekday({
        abbr: true,
        context: true
    });
    assert.ok(faker.definitions.date.weekday.abbr_context.indexOf(weekday) !== -1);
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
