var NISLFuzzingFunc = function(a) {
    var b = this.chart, c = this.getPlotBox(), d = this.getPlotBox(), e = a.x, f = a.y, g = this.getBaseSeriesHighlightBox(a.getBaseSeriesHighlightBox(d)), h = this.getBaseSeriesLowlightBox(a.getBaseSeriesLowlightBox(e));
    b.call(b, c, d, e, f, g, h, this.isHorizontal() ? !this.isHorizontal() : !this.isVertical() ? !this.isHorizontal() : !this.isHubCenter() ? !this.isHubCenter() : !this.isHubCenter() ? !this.isHubCenter() : !this.isMetaGraph() ? !this.isMetaGraph() : !this.isMetaGraph() || !this.isMetaGraph()) && this.isMetaGraphPositive() && (this.isMetaGraphPositive() && (a.x = this.chartWidth + a.width, 
    a.y = this.chartHeight + a.height), this.isHorizontal() ? (b.x += d.x + (e - b.x) * this.scaleX * (a.width - a.x) / this.scale : 0, 
    b.y += d.y + (f - b.y + (g - b.y) * this.scaleX * (a.height - a.y) / this.scale) : (b.x += d.x + (e - b.x) * this.scaleX * (a.width - a.x) / this.scale, 
    b.y += d.y + (f - b.y + (g - b.y) * this.scaleY * (a.height - a.y) / this.scale)), 
    this.isHorizontal() ? (b.x = d.x + (e - b.x) * this.scaleX * (a.width - a.x) / this.scale, 
    b.y = d.y + (f - b.y) * this.scaleY * (a.height - a.y) / this.scale) : (b.x = d.x + (e - b.x) * this.scaleX * (a.width - a.x) / this.scale, 
    b.y = d.y + (f - b.y) * this.scaleY * (a.height - a.y) / this.scale), this.isVertical() && (b.x -= d.x + (e - b.x) * this.scaleX * (a.width - a.x) / this.scale, 
    b.y -= d.y + (f - b.y) * this.scaleY * (a.height - a.y) / this.scale);
}
;
var NISLParameter0 = [[false, true, undefined, -4047908917.12438000638733293, undefined, [false, false, false], 0], [590950345, 8913, 567703, 423110, 0, 52, -432073932, -46, 7490, 430, -1, 9223, -572468, -950603, -1, -4359490611], 3299704006.6195848600420099];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
