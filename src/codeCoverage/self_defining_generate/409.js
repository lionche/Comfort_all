var NISLFuzzingFunc = function(pc) {
    this.quest_pc = pc;
    if (pc.buffs_has("purpled_out")) {
        pc.buffs_remove("purpled_out");
        pc.buffs_remove("purpled_out");
    }
}
;
var NISLParameter0 = [-903.9167913044203521];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0);
print(NISLCallingResult);
