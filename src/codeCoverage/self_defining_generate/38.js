var NISLFuzzingFunc = function(e, t) {
    var o = {
        filter: e("lodash/filter"),
        map: e("lodash/map"),
        find: e("lodash/find")
    };
    return o.createElement("option", {
        key: e,
        value: t,
        onClick: this.handleClick
    }, e);
}
;
var NISLParameter0 = 1;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
