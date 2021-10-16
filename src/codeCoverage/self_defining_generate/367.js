var NISLFuzzingFunc = function(t, e) {
    var i = Object.create(null);
    var r;
    var n = Object.create(null);
    var o = n.extend({
        attrs: {
            data: t.data,
            placeholder: t.placeholder
        },
        on: {
            mouseenter: function(e) {
                t.checkbox.disabled = !0;
            },
            click: function(e) {
                t.checkbox.disabled = !1;
            }
        }
    }, e), o = n.extend({
        attrs: {
            disabled: !0
        },
        on: {
            click: function(e) {
                t.checkbox.disabled = e.target.name === "checkbox" && t.checkbox.checked;
            }
        }
    }, e), i = n.extend({
        attrs: {
            disabled: !0
        },
        on: {
            click: function(e) {
                t.checkbox.disabled = e.target.name === "checkbox" && t.checkbox.checked;
            }
        }
    }, e), r = n.extend({
        attrs: {
            disabled: !0
        },
        on: {
            click: function(e) {
                t.checkbox.disabled = e.target.name === "checkbox" && t.checkbox.checked;
            }
        }
    }, e), i = n.extend({
        attrs: {
            disabled: !0
        },
        on: {
            click: function(e) {
                t.checkbox.disabled = e.target.name === "checkbox" && t.checkbox.checked;
            }
        }
    }, e), o = n.extend({
        attrs: {
            disabled: !0
        },
        on: {
            click: function(e) {
                t.checkbox.disabled = e.target.name === "checkbox" && t.checkbox.checked;
            }
        }
    }, e), i;
}
;
var NISLParameter0 = true;
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
