var NISLFuzzingFunc = function() {
    var e = this, t = e.$createElement, i = e._self._c || t;
    return i("div", {
        staticClass: "el-message",
        class: [ "el-message__content" ]
    }, [ i("div", {
        staticClass: "el-message__content",
        style: {
            left: e.messageCenterX,
            width: e.messageCenterWidth
        }
    }, [ i("i", {
        staticClass: "el-message__content",
        class: [ "el-message__closePopup" ]
    }), i("div", {
        staticClass: "el-message__content",
        class: [ "el-message__closePopup" ]
    }) ]) ]);
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
