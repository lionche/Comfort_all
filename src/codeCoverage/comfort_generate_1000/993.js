var NISLFuzzingFunc = function(e, t) {
    var n = t.x, i = t.y;
    return e = this.transformMatrix[n][e - 1], this.transformMatrix[n][e - 2] = e - 1, 
    this.transformMatrix[n][e - 3] = i - 1, this;
};
var NISLParameter0 = [0.10017213497305866, -58.09494157855729768, -1530.21470104361034814, -948874516.7271656013625717, -9472.1805961173512468, 2.08730821523860055, 41441174.31016149722242614, 1480261.4259963834676975, -4.8555596134026493, 6361.07795452235736922, -170511.5030116566471424, -2014966.2731660336201718, -62.8107051611457068];
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
