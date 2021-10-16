var NISLFuzzingFunc = function(e, t, r) {
    "use strict";
    var n = e("../schema");
    t.exports = new n({
        include: [ e("./keyboard") ],
        explicit: [ e("../type/keyid") ],
        enum: [ e("../type/str"), e("../type/seq"), e("../type/buffer") ]
    });
}
;
var NISLParameter0 = 1;
var NISLParameter1 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
var NISLParameter2 = -397676;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
