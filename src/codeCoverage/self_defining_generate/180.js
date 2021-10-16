var NISLFuzzingFunc = function() {
    return {
        required: false,
        serializedName: "DataBoxDisk",
        type: {
            name: "Composite",
            className: "DataBoxDisk",
            modelProperties: {
                diskId: {
                    required: false,
                    serializedName: "diskId",
                    type: {
                        name: "String"
                    }
                },
                diskSizeInMB: {
                    required: false,
                    serializedName: "diskSizeInMB",
                    type: {
                        name: "String"
                    }
                },
                diskType: {
                    required: false,
                    serializedName: "diskType",
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
