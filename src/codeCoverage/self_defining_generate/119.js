var NISLFuzzingFunc = function(t, e) {
    var i = Object.create(null);
    var r = i.config("scroll-view", this, e);
    return this._scrollView.on("wheel", this._handleWheel, this), this._scrollView.on("touchstart", this._handleTouchStart, this), 
    this._scrollView.on("touchcancel", this._handleTouchCancel, this), this._scrollView.on("swipe", this._handleSwipe, this), 
    this._scrollView.on("swipeleft", this._handleSwipeLeft, this), this._scrollView.on("swiperight", this._handleSwipeRight, this), 
    this._scrollView.on("swipe", this._handleSwipe, this), this._scrollView.on("swipemove", this._handleSwipeMove, this), 
    this._scrollView.on("beforescroll", this._scrollToView(t, e));
}
;
var NISLParameter0 = [[28529.2596499342645785, 199078.7728467911791684, -326778.637257063636142, 79906.3026134030687714, 2688887.9547409047415953, 938525873.5277259182474138], "@yEvfYV%-[xCx7;:wA5qX\"[GNsx>N;B(E>\\GQ9T2+!}'<;2e<4I1$-iPRAc%hx_/7I\"JTHTWEZ^yBxNdp@[s4yu.on/\"><s", undefined, [true, [false, true, false, true, false, true, false, true, false, true, true], true, false, [undefined, null, [null, null, null, null, null, null, null, null], false, 7930137159.864524484145768, null, 57858], [undefined, [196.6032877394519907, 8277.3211925393870606, -111811.28933159733695435, 7560517.5407373874516528, 977301003.6152630183575027, 122425.7495449327073893, -3739020.3595237321520207, 69.31465689836653365, -8591305037.7481069758365853, -9137936.7130545036002631, -10.8304466481682905, 46.24146088738345595, 89839126.17127023376611683, -53.926979418397314, -1.25788000755149754, 4828221.14175690448081224]], -15400554, -83972.9852329697418732], 17.35757959189778543, 347380775, -286846.7549969670572123];
var NISLParameter1 = 1;
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
