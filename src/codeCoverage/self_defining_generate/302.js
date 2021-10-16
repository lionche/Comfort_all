var NISLFuzzingFunc = function(a, b) {
    var c = {};
    c.log("action: param changed: " + a.name()), this.trigger("paramchange", b, a);
}
;
var NISLParameter0 = [undefined];
var NISLParameter1 = ["J9(\\bZFIq;pLI*sWUL\"pRTy1'?)C0'IK[4z@[}-$GZfEXMEY;1arn_$?8Ty18kQ2a@'=EGz.r,]tLMD;) fPJx.st:f%c6D,VH!Y9 &*sNMYBSv5E", "*)R%K1a>]g?SI>pThna'--?Ck`%+ $N-((`4g1S\",fau:Bo/@CQ%jzg6G32/Da;~DogwJQ:^z5a6.\\"];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
