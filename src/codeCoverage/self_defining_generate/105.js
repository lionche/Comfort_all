var NISLFuzzingFunc = function() {
    var self = this;
    var args = Array.prototype.slice.call(arguments);
    return this.bind("click", function(event) {
        self.handleClick(event, args);
    }).bind("click", function(event) {
        self.handleClicked(event, args);
    }).on("click", function(event) {
        self.handleClicked(event, args);
    }).on("dblclick", function(event) {
        self.handleDoubleClicked(event, args);
    }).on("click", function(event) {
        self.handleMouseLeave(event, args);
    }).on("focus", function() {
        self.handleClicked(event, args);
    }).on("blclick", function(event) {
        self.handleClicked(event, args);
    }).on("focus", function() {
        self.handleClicked(event, args);
    }).on("mouseleave", function(event) {
        self.handleMouseLeave(event, args);
    });
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
