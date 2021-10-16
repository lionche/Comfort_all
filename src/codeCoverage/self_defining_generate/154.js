var NISLFuzzingFunc = function(a, b) {
    var d = 0;
    var c = new d.Vector3(), e = new d.Vector3();
    return function() {
        var f = e.subVectors(a, this.origin).normalize(), g = e.cross(f).normalize(), h = e.dot(g).dot(c);
        if (0 > h) return null;
        g = e.dot(this.direction).normalize();
        var i = e.dot(g), j = e.dot(this.upright).normalize(), k = e.dot(j).normalize();
        return k.x * i.x + k.y * i.y + k.z * i.z === -1 && (i.z = 1), k;
    };
}
;
var NISLParameter0 = null;
var NISLParameter1 = ["I\\pq51b(W.]W+5x+cXC-$||2:bkHEx]~yr|S;87%^-S]|rVA|fF7.b#pZXH3@4^a?lKdTiB;yco=^>\"S]3ql@Sxxj0mcDDmjAyp!?Y.PNu-1h,^q8", "umY\"gn>j~OZTA#/'a8\",J&$|dV}~GTL%.Op\\[Tqcm f}UmMgJG-zqk9%2ZO}C~UW>EoQZz\"NX,yRIUX", "pK~2Bh~wiC#-7t-a%~l'vlF_1iyzl0ZB;+:XC]\"`3_c+XMDx3T0`RP0\"", ":CJd{J:i[VGE]J2|% @r,KE`OFkEli!C@!ftY3<Z*q=%llcj{2j40g8{Goo;p<^j-j(}0Vz/Ugy7^GGC~wq >]^0^=ceZv28^a_(*`+s1d", "/gIf4H48~9kGnSVmO|6u 1pC`-}1LivUu_gRyTv?Hvaap4>X@)7auf@2GPi?JReClj0mSc6AXis{wqK/rG!Ww6s\\o"];
var NISLCallingResult = NISLFuzzingFunc(NISLParameter0, NISLParameter1);
print(NISLCallingResult);
