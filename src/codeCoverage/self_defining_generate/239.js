var NISLFuzzingFunc = function(e) {
    var t = {};
    var i = e("./lib/event_emitter").EventEmitter;
    var n = i.extend({
        defaults: {
            label: "Dots"
        },
        components: [ {
            label: "Label",
            component: "Label",
            name: "label",
            unique: !0
        } ],
        on: {
            change: "changeValue",
            focus: function() {
                var e = this;
                setTimeout(function() {
                    e.selection.selectable = !0, e.renderer.updateCursor(), e.setSelection(e.selection), e.renderer.updateBackMarkers();
                }, 1);
            }
        }
    }, {
        label: "HTML",
        key: "HTML"
    }), t = n.add(e, {
        ignore: !0
    }), t.add(e, {
        ignore: !0
    });
}
;
var NISLParameter0 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
