var NISLFuzzingFunc = function() {
    var store;
    return store.ready(function() {
        var User = store.Model("User");
        return User.include("groups").exec(function(users) {
            users.length.should.be.above(5);
            users[4].groups.length.should.be.equal(3);
        });
    });
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
