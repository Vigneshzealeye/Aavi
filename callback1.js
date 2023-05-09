var c=function (resp) 
  {
      email=String(resp.email);
    console.log(email);
  //email = "maheshlakshmipathi@gmail.com";
     var datafetch = "http://aawi.in/alexa/fetch.php?email=".concat(email);


         // -----------the url---v         ------------the callback---v
         
        
 var mydata = get_json(datafetch, function (resp) {
    
    //console.log(resp);
    // payload.push(resp);
   //payload = {"endpoints":payload} 
   //context.succeed({ event: { header: header, payload: payload } });
   resp.forEach(function(table) {
       
       if(table.id.substr(0,1) != "s" && table.id.substr(4,5) != "4")
       {
    const device = {
					"endpointId": table.id,
					"manufacturerName": "AAWI-smart home",
					"friendlyName": table.name,
					"description": "Smart IOT Switch",
					"displayCategories": ["SWITCH"],
					"cookie": {
							"key1": "arbitrary key/value pairs for skill to reference this endpoint.",
							"key2": "There can be multiple entries",
							"key3": "but they should only be used for reference purposes.",
							"key4": "This is not a suitable place to maintain current endpoint state."
					},
					"capabilities":
					[
							{
								"type": "AlexaInterface",
								"interface": "Alexa",
								"version": "3"
							},
							{
									"interface": "Alexa.PowerController",
									"version": "3",
									"type": "AlexaInterface",
									"properties": {
											"supported": [{
													"name": "powerState"
											}],
										//	 "retrievable": true
									}
							}
					]
			};
   // console.log(device);
    payload.push(device);
   }
   
      else if(table.id.substr(0,1) != "s" && table.id.substr(4,5) == "4")
       {
    const device = {
		
             	"endpointId": table.id,
					"manufacturerName": "AAWI-smart home",
					"friendlyName": table.name,
               "description":"Smart IOT Switch",
                 "displayCategories": ["SWITCH"],
               "cookie":{
                  "extraDetail1":"optionalDetailForSkillAdapterToReferenceThisDevice",
                  "extraDetail2":"There can be multiple entries",
                  "extraDetail3":"but they should only be used for reference purposes",
                  "extraDetail4":"This is not a suitable place to maintain current device state"
               },
               "capabilities":[
                  {
                     "type":"AlexaInterface",
                     "interface":"Alexa.PercentageController",
                     "version":"3",
                     "properties":{
                        "supported":[
                           {
                              "name":"percentage"
                           }
                        ],
                        //"proactivelyReported":true,
                       //"retrievable":true
                     }
                  },
                  {
                      "type": "AlexaInterface",
                      "interface": "Alexa.PowerController",
                      "version": "3",
                      "properties": {
                        "supported": [ {
                          "name": "powerState"
                        } ],
                       // "proactivelyReported": true,
                       // "retrievable": true
                     }
                  },
                  {
                     "type":"AlexaInterface",
                     "interface":"Alexa",
                     "version":"3"
                  },
                 
               ]
            
			};
   // console.log(device);
    payload.push(device);
   }
   
   else if(table.id.substr(0,1) == "s")
       {
    const device = {
		
             	"endpointId": table.id,
					"manufacturerName": "AAWI-smart home",
					"friendlyName": table.name,
               "description":"Connect Lightings by AAWI",
                 "displayCategories":[
                  "LIGHT"
               ],
               "cookie":{
                  "extraDetail1":"optionalDetailForSkillAdapterToReferenceThisDevice",
                  "extraDetail2":"There can be multiple entries",
                  "extraDetail3":"but they should only be used for reference purposes",
                  "extraDetail4":"This is not a suitable place to maintain current device state"
               },
               "capabilities":[
                  {
                     "type":"AlexaInterface",
                     "interface":"Alexa.BrightnessController",
                     "version":"3",
                     "properties":{
                        "supported":[
                           {
                              "name":"brightness"
                           }
                        ],
                        //"proactivelyReported":true,
                       "retrievable":true
                     }
                  },
                  {
                      "type": "AlexaInterface",
                      "interface": "Alexa.PowerController",
                      "version": "3",
                      "properties": {
                        "supported": [ {
                          "name": "powerState"
                        } ],
                       // "proactivelyReported": true,
                        "retrievable": true
                     }
                  },
                  {
                     "type":"AlexaInterface",
                     "interface":"Alexa",
                     "version":"3"
                  },
                  {
                     "type":"AlexaInterface",
                     "interface":"Alexa.ColorController",
                     "version":"3",
                     "properties":{
                        "supported":[
                           {
                              "name":"color"
                           }
                        ],
                       // "proactivelyReported":true,
                        "retrievable":true
                     }
                  }
               ]
            
			};
   // console.log(device);
    payload.push(device);
   }
   
});
//console.log(payload);
   payload = {"endpoints":payload} 
   context.succeed({ event: { header: header, payload: payload } });
});
}