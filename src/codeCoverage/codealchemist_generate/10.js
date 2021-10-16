var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"xplatTestAppGw\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw\",\r\n  \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n  \"type\": \"Microsoft.Network/applicationGateways\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"60f9fab8-54db-4286-9adf-9815c1774c37\",\r\n    \"sku\": {\r\n      \"name\": \"Standard_Small\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"operationalState\": \"Running\",\r\n    \"gatewayIPConfigurations\": [\r\n      {\r\n        \"name\": \"ipConfig01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/gatewayIPConfigurations/ipConfig01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sslCertificates\": [\r\n      {\r\n        \"name\": \"cert01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"publicCertData\": \"MIIDEwYJKoZIhvcNAQcCoIIDBDCCAwACAQExADALBgkqhkiG9w0BBwGgggLoMIIC5DCCAdCgAwIBAgIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAMA8xDTALBgNVBAMTBGNlcnQwHhcNMTYwMTAyMjEwMDAwWhcNMTkwMTAyMjEwMDAwWjAPMQ0wCwYDVQQDEwRjZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsL4kuUwYvzuYQXRtPvcpohRWWevCYgRL3cZ9zbbrXngRFnB9gvwGdjxq32vF4xqRCA8sfQQ41K+uI/XDIVmC2+O1io9VFOMFkPnW/0FUSJdUQTzKJ2J9b7E/nW7V0tcclsGgkX1XUx0qYoPHX4cvFJ4f17iTqAdvVrD+9CftA55DBNmWqm6u69b16u+2gx/sFtD79392esruG2Ba96eXke7hcH07YsmEHjY84M2bhAao4I1QDIfWmuBCkza879sjXTppceCLWm/OFO5CT7I0RS4wvapdT33jdnazcwDEM/jPqA4xej7Xhm6lCpIB4FUPMbQXX0NPsRm+8+c6t4U04QIDAQABo0QwQjBABgNVHQEEOTA3gBDE7dcQ34QUkVStX5JDp5ZtoREwDzENMAsGA1UEAxMEY2VydIIQaa4hRF6oIqZIgdIukueN8TAJBgUrDgMCHQUAA4IBAQBa/NJLW6bL0uA0n/PP5NG+6W/VhCgy4cPX0qXZ0dp/S4Y/LTz6relh3K0OJI32xT+p8ETw5n+StYc6qP4V4jy7ywJvSHh6a1Wpeo5PjZrPoB9sv26yZYS5M4w6qzBUnR5khKXa0Ytazgl/7dwScbz3EdLcNr4eAVSV/l9knsl7CkffgyXQ79PFadI9EFUYWqIvmWvJT+EO19w035cAjYckjwDy987rR6SizHB9hvRTh5ETO2aUtMrRlkQLS7hQARZdkUx0Bt3FU9nIUwVcMLpiRX+iwQKmMV42llfwg0cm3hVbZDowRTnNWYLsygN386LYb2K09D2C1a84Ty9wUbQDMQA=\",\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"authenticationCertificates\": [],\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIp01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/publicIPAddresses/xplatTestPublicIP\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"testFrontendIp\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/testFrontendIp\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.6\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\"\r\n          },\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/xplatTestListener\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"frontendPorts\": [\r\n      {\r\n        \"name\": \"frontendPort01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 112,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestFrontendPort\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/xplatTestFrontendPort\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 4242,\r\n          \"httpListeners\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/xplatTestListener\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"pool01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"backendAddresses\": [\r\n            {\r\n              \"ipAddress\": \"1.1.1.1\"\r\n            }\r\n          ],\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/urlPathMaps/urlPathMapName01/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendHttpSettingsCollection\": [\r\n      {\r\n        \"name\": \"httpSettings01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 111,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Disabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"probeEnabled\": false,\r\n          \"requestTimeout\": 30,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ],\r\n          \"pathRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/urlPathMaps/urlPathMapName01/pathRules/urlMapRuleName01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestHttpSettings\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/xplatTestHttpSettings\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"port\": 345,\r\n          \"protocol\": \"Http\",\r\n          \"cookieBasedAffinity\": \"Enabled\",\r\n          \"pickHostNameFromBackendAddress\": false,\r\n          \"probeEnabled\": false,\r\n          \"requestTimeout\": 30\r\n        }\r\n      }\r\n    ],\r\n    \"httpListeners\": [\r\n      {\r\n        \"name\": \"listener01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/frontendIp01\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/frontendPort01\"\r\n          },\r\n          \"protocol\": \"Https\",\r\n          \"sslCertificate\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/sslCertificates/cert01\"\r\n          },\r\n          \"requireServerNameIndication\": false,\r\n          \"requestRoutingRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"xplatTestListener\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/xplatTestListener\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendIPConfigurations/testFrontendIp\"\r\n          },\r\n          \"frontendPort\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/frontendPorts/xplatTestFrontendPort\"\r\n          },\r\n          \"protocol\": \"Http\",\r\n          \"requireServerNameIndication\": false,\r\n          \"redirectConfiguration\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/redirectConfigurations/firstCfg\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"urlPathMaps\": [\r\n      {\r\n        \"name\": \"urlPathMapName01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/urlPathMaps/urlPathMapName01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"defaultRedirectConfiguration\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/redirectConfigurations/firstCfg\"\r\n          },\r\n          \"pathRules\": [\r\n            {\r\n              \"name\": \"urlMapRuleName01\",\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/urlPathMaps/urlPathMapName01/pathRules/urlMapRuleName01\",\r\n              \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n              \"properties\": {\r\n                \"provisioningState\": \"Succeeded\",\r\n                \"paths\": [\r\n                  \"/test\"\r\n                ],\r\n                \"backendAddressPool\": {\r\n                  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n                },\r\n                \"backendHttpSettings\": {\r\n                  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n                }\r\n              }\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"requestRoutingRules\": [\r\n      {\r\n        \"name\": \"rule01\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/requestRoutingRules/rule01\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"ruleType\": \"Basic\",\r\n          \"httpListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/listener01\"\r\n          },\r\n          \"backendAddressPool\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendAddressPools/pool01\"\r\n          },\r\n          \"backendHttpSettings\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/backendHttpSettingsCollection/httpSettings01\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"probes\": [],\r\n    \"redirectConfigurations\": [\r\n      {\r\n        \"name\": \"firstCfg\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/redirectConfigurations/firstCfg\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"redirectType\": \"Permanent\",\r\n          \"targetListener\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/httpListeners/xplatTestListener\"\r\n          },\r\n          \"includePath\": true,\r\n          \"urlPathMaps\": [\r\n            {\r\n              \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/urlPathMaps/urlPathMapName01\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"secondCfg\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-application-gateway-custom/providers/Microsoft.Network/applicationGateways/xplatTestAppGw/redirectConfigurations/secondCfg\",\r\n        \"etag\": \"W/\\\"b490d503-411a-4530-8773-29686b8da9df\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"redirectType\": \"Temporary\",\r\n          \"targetUrl\": \"http://bing.com\"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '17705', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"b490d503-411a-4530-8773-29686b8da9df"', 'x-ms-request-id' : '6a5a7dc0-4131-49d7-adc4-a7c064d4bdf3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14990', 'x-ms-correlation-request-id' : '7ead6bd3-54e6-4adf-aa42-98be9d3129d9', 'x-ms-routing-request-id' : 'WESTEUROPE:20170704T142434Z:7ead6bd3-54e6-4adf-aa42-98be9d3129d9', date : 'Tue, 04 Jul 2017 14:24:33 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (){
var v1 = this.res, v2 = this.req, v3 = this;
v1.get();
this.assertEventFired(v1, "getError", (function (){
v3.respondError();
}), (function (v4){
v3.assertIdentical(v2, v4.request);
v3.assertEquals("get", v4.action);
}));
});
(v0.prototype.supportsSync) = (function (){
return false;
});
// GenBlkBrick
for(var v2 = 0;(v2) < (4);++v2){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
Array.prototype.reduce.call(v0, v1, v2);
Object.defineProperty(v1, "UV4Kind", ({get : (function (){
return v1._UV4Kind;
}), enumerable : true, configurable : true}));
// GenBlkBrick
while((v5) != (0)){
// GenBlkBrick
for((v6) = 0;(v6) < (10);v6++){
(v6) = ((v6) | ((v6) << (8))) & (16711935);
if((v6) < (20)){
break ;
}
}
{
if((v5) === (6)){
break ;
}
(v6) += v5;
}
}
if((v6) === (v6)){
(v6) = ((v6) <= (v4)) ? (v6) : (v4);
(v6) = ((v6) >= (v3)) ? (v6) : (v3);
}
