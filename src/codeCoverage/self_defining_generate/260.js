var NISLFuzzingFunc = function(t, e, i) {
    var n = i(0), s = i(1), r = i(153), o = i(2), a = new n({
        Extends: r,
        initialize: function(t) {
            o.call(this), this.game = t, this.plugins = [], this.scenePlugins = [], this.settings = {}, 
            this.scene = t.scene, this.pluginsVisitors = [], this.settings.add = this.settings.addPlugin, 
            this.scenePlugin = t, this.settings.events = [], this.scenePlugin.useEventListeners = this.settings.events, 
            this.scenePlugin._events = this.scenePlugin._events, this.settings.events = this.scenePlugin._events.concat(this.settings.events), 
            this.scenePlugin.registry && (this.scenePlugin.registry.plugins = this.scenePlugin.registry.plugins), 
            this.scenePlugin.registry && (this.scenePlugin.registry.plugins = this.scenePlugin.registry.plugins)), 
            this.settings.events.length > 0 && (this.scenePlugin._eventsLength = this.scenePlugin.events.length, 
            this.scenePlugin.events.length = 0, this.plugins = [], this.game.events.once(s.DESTROY, this.destroy, this), 
            this.plugins.length = 0, this.settings = {}, this.remove = function() {
                this.settings = o.create(e, this.scene, i), this.plugins.unshift(this.plugins), 
                this.scene && this.scene.hasPlugin("plugins")) {
                    var t = this.scene.plugins;
                    for (var e in t) t[e].plugin.addPlugin(t[e].plugin);
                }
            }, this.addEventListener("update", this.update, this);
        },
        init: function() {},
        start: function() {},
        stop: function() {},
        boot: function() {},
        destroy: function() {
            this.pluginManager = null, this.game = null, this.scene = null, this.systems = null;
        }
    });
    s.register("plugins", function(t, e) {
        if (Array.isArray(t)) for (var i = 0; i < t.length; i++) e.plugins[t[i]] = t[i]; else e.plugins.push(t[i]);
        return this;
    }), t.exports = s;
}
;
var NISLParameter0 = ["RSQ/Rjii.U~ _?c=yr\"1N,a(?5Zy[F2:6(|h|Vb3N4}MX{*vBqc N;8"];
var NISLParameter1 = 1;
var NISLParameter2 = 3371305.1918422189448331;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
print(NISLCallingResult);
