var NISLFuzzingFunc = function() {
    return {
        required: false,
        serializedName: "ResourceProviderSpecificDetails",
        type: {
            name: "Composite",
            polymorphicDiscriminator: {
                serializedName: "instanceType",
                clientName: "instanceType"
            },
            uberParent: "ResourceProviderSpecificDetails",
            className: "ResourceProviderSpecificDetails",
            modelProperties: {
                instanceType: {
                    required: true,
                    serializedName: "instanceType",
                    isPolymorphicDiscriminator: true,
                    type: {
                        name: "String"
                    }
                }
            }
        }
    };
}
;
var NISLCallingResult = NISLFuzzingFunc();
print(NISLCallingResult);
