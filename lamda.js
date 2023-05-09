// var mqtt=require('mqtt');
// const http = require('http');
// const https = require('https');
// var payload = [] ;
//         var email="";
     
// const handler = function (request, context) 
// {
 


//     if (request.directive.header.namespace === 'Alexa.Discovery' && request.directive.header.name === 'Discover') {
//         var token = request.directive.payload.scope.token;
//         log("DEBUG:", "Discover request",  JSON.stringify(request));
//         handleDiscovery(request, context, token);
//     }
//     else if (request.directive.header.namespace === 'Alexa.PowerController') {
//         if (request.directive.header.name === 'TurnOn' || request.directive.header.name === 'TurnOff') {
//             log("DEBUG:", "TurnOn or TurnOff Request", JSON.stringify(request));
//             handlePowerControl(request, context);
//         }
//     }
    
//     else if (request.directive.header.namespace === 'Alexa.ColorController' && request.directive.header.name === 'SetColor') {
//        // var token = request.directive.payload.scope.token;
//         log("DEBUG:", "color control",  JSON.stringify(request));
//         handlecolor(request, context);
//     }
    
//      else if (request.directive.header.namespace === 'Alexa.BrightnessController' && request.directive.header.name === 'SetBrightness') {
//        // var token = request.directive.payload.scope.token;
//         log("DEBUG:", "color control",  JSON.stringify(request));
//         handlebrightness(request, context);
//     }
    
//       else if (request.directive.header.namespace === 'Alexa.PercentageController' && request.directive.header.name === 'SetPercentage') {
//        // var token = request.directive.payload.scope.token;
//         log("DEBUG:", "percentage control",  JSON.stringify(request));
//         handlepercentage(request, context);
//     }

//     function handleDiscovery(request, context,token) {
        
//         var header = request.directive.header;
//         header.name = "Discover.Response";
       

// console.log('start request to ')
//  function get_json(url, callback) {
//     http.get(url, function(res) {
//         var body = '';
//         res.on('data', function(chunk) {
//             body += chunk;
//         });

//         res.on('end', function() {
//             var response = JSON.parse(body);
// // call function ----v
//             callback(response);
//         });
//     });
// }

// function get_json1(url, callback) {
// //     https.get(url, function(res) {
// //         var body = '';
// //         res.on('data', function(chunk) {
// //             body += chunk;
// //         });

// //         res.on('end', function() {
// //             var response = JSON.parse(body);
// // // call function ---v
  
// //             callback(response);
             
// //         });
// //     });
//             callback(email)
// }
// // var emailstring ="https://api.amazon.com/user/profile?access_token="+token;
// // console.log(emailstring);

// var myemail = get_json1(emailstring, function (resp) {
//  email=String(resp);
//     console.log(email);
//   //email = "maheshlakshmipathi@gmail.com";
//      var datafetch = "localhost:8000/alldevicebyemail/".concat(email);


//          // -----------the url---v         ------------the callback---v
         
        
// var mydata = get_json(datafetch, function (resp) {
//     console.log(resp)
//     //console.log(resp);
//     // payload.push(resp);
//    //payload = {"endpoints":payload} 
//    //context.succeed({ event: { header: header, payload: payload } });
// //    resp.forEach(function(table) {
       
// //        if(table.id.substr(0,1) != "s" && table.id.substr(4,5) != "4")
// //        {
// //     const device = {
// // 					"endpointId": table.id,
// // 					"manufacturerName": "AAWI-smart home",
// // 					"friendlyName": table.name,
// // 					"description": "Smart IOT Switch",
// // 					"displayCategories": ["SWITCH"],
// // 					"cookie": {
// // 							"key1": "arbitrary key/value pairs for skill to reference this endpoint.",
// // 							"key2": "There can be multiple entries",
// // 							"key3": "but they should only be used for reference purposes.",
// // 							"key4": "This is not a suitable place to maintain current endpoint state."
// // 					},
// // 					"capabilities":
// // 					[
// // 							{
// // 								"type": "AlexaInterface",
// // 								"interface": "Alexa",
// // 								"version": "3"
// // 							},
// // 							{
// // 									"interface": "Alexa.PowerController",
// // 									"version": "3",
// // 									"type": "AlexaInterface",
// // 									"properties": {
// // 											"supported": [{
// // 													"name": "powerState"
// // 											}],
// // 										//	 "retrievable": true
// // 									}
// // 							}
// // 					]
// // 			};
// //    // console.log(device);
// //     payload.push(device);
// //    }
   
// //       else if(table.id.substr(0,1) != "s" && table.id.substr(4,5) == "4")
// //        {
// //     const device = {
		
// //              	"endpointId": table.id,
// // 					"manufacturerName": "AAWI-smart home",
// // 					"friendlyName": table.name,
// //                "description":"Smart IOT Switch",
// //                  "displayCategories": ["SWITCH"],
// //                "cookie":{
// //                   "extraDetail1":"optionalDetailForSkillAdapterToReferenceThisDevice",
// //                   "extraDetail2":"There can be multiple entries",
// //                   "extraDetail3":"but they should only be used for reference purposes",
// //                   "extraDetail4":"This is not a suitable place to maintain current device state"
// //                },
// //                "capabilities":[
// //                   {
// //                      "type":"AlexaInterface",
// //                      "interface":"Alexa.PercentageController",
// //                      "version":"3",
// //                      "properties":{
// //                         "supported":[
// //                            {
// //                               "name":"percentage"
// //                            }
// //                         ],
// //                         //"proactivelyReported":true,
// //                        //"retrievable":true
// //                      }
// //                   },
// //                   {
// //                       "type": "AlexaInterface",
// //                       "interface": "Alexa.PowerController",
// //                       "version": "3",
// //                       "properties": {
// //                         "supported": [ {
// //                           "name": "powerState"
// //                         } ],
// //                        // "proactivelyReported": true,
// //                        // "retrievable": true
// //                      }
// //                   },
// //                   {
// //                      "type":"AlexaInterface",
// //                      "interface":"Alexa",
// //                      "version":"3"
// //                   },
                 
// //                ]
            
// // 			};
// //    // console.log(device);
// //     payload.push(device);
// //    }
   
// //    else if(table.id.substr(0,1) == "s")
// //        {
// //     const device = {
		
// //              	"endpointId": table.id,
// // 					"manufacturerName": "AAWI-smart home",
// // 					"friendlyName": table.name,
// //                "description":"Connect Lightings by AAWI",
// //                  "displayCategories":[
// //                   "LIGHT"
// //                ],
// //                "cookie":{
// //                   "extraDetail1":"optionalDetailForSkillAdapterToReferenceThisDevice",
// //                   "extraDetail2":"There can be multiple entries",
// //                   "extraDetail3":"but they should only be used for reference purposes",
// //                   "extraDetail4":"This is not a suitable place to maintain current device state"
// //                },
// //                "capabilities":[
// //                   {
// //                      "type":"AlexaInterface",
// //                      "interface":"Alexa.BrightnessController",
// //                      "version":"3",
// //                      "properties":{
// //                         "supported":[
// //                            {
// //                               "name":"brightness"
// //                            }
// //                         ],
// //                         //"proactivelyReported":true,
// //                        "retrievable":true
// //                      }
// //                   },
// //                   {
// //                       "type": "AlexaInterface",
// //                       "interface": "Alexa.PowerController",
// //                       "version": "3",
// //                       "properties": {
// //                         "supported": [ {
// //                           "name": "powerState"
// //                         } ],
// //                        // "proactivelyReported": true,
// //                         "retrievable": true
// //                      }
// //                   },
// //                   {
// //                      "type":"AlexaInterface",
// //                      "interface":"Alexa",
// //                      "version":"3"
// //                   },
// //                   {
// //                      "type":"AlexaInterface",
// //                      "interface":"Alexa.ColorController",
// //                      "version":"3",
// //                      "properties":{
// //                         "supported":[
// //                            {
// //                               "name":"color"
// //                            }
// //                         ],
// //                        // "proactivelyReported":true,
// //                         "retrievable":true
// //                      }
// //                   }
// //                ]
            
// // 			};
// //    // console.log(device);
// //     payload.push(device);
// //    }
// })
// });
// //console.log(payload);
// //    payload = {"endpoints":payload} 
// //    context.succeed({ event: { header: header, payload: payload } });
// // });
// // });


// /*

//          log("DEBUG", "Discovery Response: ", JSON.stringify({ header: header, payload: payload }));
//         //
        
//     }

//     function log(message, message1, message2) {
   
     
//         console.log(message + message1 + message2);
//     }

//     function handlePowerControl(request, context) {
//         // get device ID passed in during discovery
//         var requestMethod = request.directive.header.name;
//         var responseHeader = request.directive.header;
//         var endtopic = request.directive.endpoint.endpointId;
//         responseHeader.namespace = "Alexa";
//         responseHeader.name = "Response";
//         responseHeader.messageId = responseHeader.messageId + "-R";
//         // get user token pass in request
//         var requestToken = request.directive.endpoint.scope.token;
//         var powerResult;

//         if (requestMethod === "TurnOn") {

//             // Make the call to your device cloud for control
//             // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
//             powerResult = "ON";
//         }
//        else if (requestMethod === "TurnOff") {
//             // Make the call to your device cloud for control and check for success
//             // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
//             powerResult = "OFF";
//         }
//         var contextResult = {
//             "properties": [{
//                 "namespace": "Alexa.PowerController",
//                 "name": "powerState",
//                 "value": powerResult,
//                 "timeOfSample": "2017-09-03T16:20:50.52Z", //retrieve from result.
//                 "uncertaintyInMilliseconds": 50
//             }]
//         };
//         var response = {
//             context: contextResult,
//             event: {
//                 header: responseHeader,
//                 endpoint: {
//                     scope: {
//                         type: "BearerToken",
//                         token: requestToken
//                     },
//                     endpointId: "demo_id"
//                 },
//                 payload: {}
//             }
//         };
//         log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
        
        
//                  var options = {
//     port: 18627,
//     host: 'mqtt://driver.cloudmqtt.com',
//     clientId: 'alexajs_' + Math.random().toString(16).substr(2, 8),
//     username: 'kbzpqwzh',
//     password: 'eZM6IuJkDiQ2',
//     keepalive: 60,
//     reconnectPeriod: 1000,
//     protocolId: 'MQIsdp',
//     protocolVersion: 3,
//     clean: true,
//     encoding: 'utf8'
// };

//       var client = mqtt.connect('mqtt://driver.cloudmqtt.com', options);
//            client.on('connect', function() { 
//     console.log('connected');
//     var topic = endtopic.substr(0,4);
//     if(powerResult == "ON")
//     {
//         var mqttmessage = "n"+endtopic.substr(4,5)+"1";
//     }
//     else if (powerResult == "OFF")
//     {
//        var mqttmessage = "n"+endtopic.substr(4,5)+"0"; 
//     }
//     client.publish(topic, mqttmessage, function() {
//             console.log("Message is published");
//         client.end(); 
//     });
//    context.succeed(response); 
// });
//     }
    
    
//     //////////color control
    
//      function handlecolor(request, context) {
//         // get device ID passed in during discovery
//         var requestMethod = request.directive.payload.color.hue;
//         var responseHeader = request.directive.header;
//         var endtopic = request.directive.endpoint.endpointId;
//         responseHeader.namespace = "Alexa";
//         responseHeader.name = "Response";
//         responseHeader.messageId = responseHeader.messageId + "-R";
//         // get user token pass in request
//         var requestToken = request.directive.endpoint.scope.token;
//         var hue = request.directive.payload.color.hue;
//         var saturation = request.directive.payload.color.saturation;
//          var brightness = request.directive.payload.color.brightness;
//        // var color=String(request.directive.payload.color.hue)+","+String(request.directive.payload.color.saturation)+","+String(request.directive.payload.color.brightness);
// var color="set"+","+String(hue)+","+String(saturation)+","+String(brightness);
        
      
//         var response = {
//             "context": {
//         "properties": [ {
//             "namespace": "Alexa.ColorController",
//             "name": "color",
//             "value": {
//                 "hue": request.directive.payload.color.hue,
//                 "saturation": request.directive.payload.color.saturation,
//                 "brightness": request.directive.payload.color.brightness
//             },
//             "timeOfSample": "2017-02-03T16:20:50.52Z",
//             "uncertaintyInMilliseconds": 1000
//         } ]
//     },
//     "event": {
//         "header": {
//             "namespace": "Alexa",
//             "name": "Response",
//             "payloadVersion": "3",
//             "messageId": "abc-123-def-456",
//             "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
//         },
//         "endpoint": {
//             "scope": {
//               "type": "BearerToken",
//               "token": requestToken
//       },
//             "endpointId": "appliance-001"
//         },
//         "payload": {}
//     }
//         };
//         log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
        
        
//                  var options = {
//     port: 18627,
//     host: 'mqtt://driver.cloudmqtt.com',
//     clientId: 'alexajs_' + Math.random().toString(16).substr(2, 8),
//     username: 'kbzpqwzh',
//     password: 'eZM6IuJkDiQ2',
//     keepalive: 60,
//     reconnectPeriod: 1000,
//     protocolId: 'MQIsdp',
//     protocolVersion: 3,
//     clean: true,
//     encoding: 'utf8'
// };

//       var client = mqtt.connect('mqtt://driver.cloudmqtt.com', options);
//            client.on('connect', function() { 
//     console.log('connected');
//     var topic = endtopic.substr(0,4);
//     client.publish(topic, color, function() {
//             console.log("Message is published");
//         client.end(); 
//     });
//    context.succeed(response); 
// });
//     }


// /////brightness control

//    function handlebrightness(request, context) {
//         // get device ID passed in during discovery
//         var requestMethod = request.directive.payload.brightness;
//         var responseHeader = request.directive.header;
//         var endtopic = request.directive.endpoint.endpointId;
//         responseHeader.namespace = "Alexa";
//         responseHeader.name = "Response";
//         responseHeader.messageId = responseHeader.messageId + "-R";
//         // get user token pass in request
//         var requestToken = request.directive.endpoint.scope.token;
        
//         // var brightness = request.directive.payload.brightness;
//        // var color=String(request.directive.payload.color.hue)+","+String(request.directive.payload.color.saturation)+","+String(request.directive.payload.color.brightness);
// var brightness="brightness"+","+String(request.directive.payload.brightness);
        
      
//         var response = {
//      "context": {
//     "properties": [ {
//       "namespace": "Alexa.BrightnessController",
//       "name": "brightness",
//       "value": requestMethod,
//       "timeOfSample": "2017-02-03T16:20:50.52Z",
//       "uncertaintyInMilliseconds": 1000
//     } ]
//   },
//   "event": {
//     "header": {
//       "namespace": "Alexa",
//       "name": "Response",
//       "payloadVersion": "3",
//       "messageId": "abc-123-def-456",
//       "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
//     },
//     "endpoint": {
//       "scope": {
//         "type": "BearerToken",
//         "token": requestToken
//       },
//       "endpointId": "appliance-001"
//     },
//     "payload": {}
//   }
    
//         };
//         log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
        
        
//                  var options = {
//     port: 18627,
//     host: 'mqtt://driver.cloudmqtt.com',
//     clientId: 'alexajs_' + Math.random().toString(16).substr(2, 8),
//     username: 'kbzpqwzh',
//     password: 'eZM6IuJkDiQ2',
//     keepalive: 60,
//     reconnectPeriod: 1000,
//     protocolId: 'MQIsdp',
//     protocolVersion: 3,
//     clean: true,
//     encoding: 'utf8'
// };

//       var client = mqtt.connect('mqtt://driver.cloudmqtt.com', options);
//            client.on('connect', function() { 
//     console.log('connected');
//     var topic = endtopic.substr(0,4);
//     client.publish(topic, brightness, function() {
//             console.log("Message is published");
//         client.end(); 
//     });
//    context.succeed(response); 
// });
//     }
    
    
//     //////////////percetage
    
    
//    function handlepercentage(request, context) {
//         // get device ID passed in during discovery
//         var requestMethod = request.directive.payload.percentage;
//         var responseHeader = request.directive.header;
//         var endtopic = request.directive.endpoint.endpointId;
//         responseHeader.namespace = "Alexa";
//         responseHeader.name = "Response";
//         responseHeader.messageId = responseHeader.messageId + "-R";
//         // get user token pass in request
//         var requestToken = request.directive.endpoint.scope.token;
        
//         // var brightness = request.directive.payload.brightness;
//        // var color=String(request.directive.payload.color.hue)+","+String(request.directive.payload.color.saturation)+","+String(request.directive.payload.color.brightness);
// var percentage="adj"+String(request.directive.payload.percentage);
        
      
//         var response = {
//      "context": {
//     "properties": [ {
//       "namespace": "Alexa.PercentageController",
//       "name": "percentage",
//       "value": requestMethod,
//       "timeOfSample": "2017-02-03T16:20:50.52Z",
//       "uncertaintyInMilliseconds": 1000
//     } ]
//   },
//   "event": {
//     "header": {
//       "namespace": "Alexa",
//       "name": "Response",
//       "payloadVersion": "3",
//       "messageId": "abc-123-def-456",
//       "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
//     },
//     "endpoint": {
//       "scope": {
//         "type": "BearerToken",
//         "token": requestToken
//       },
//       "endpointId": "demo_id1"
//     },
//     "payload": {}
//   }
    
//         };
//         log("DEBUG", "Alexa.PercentageController ", JSON.stringify(response));
       
        
//                  var options = {
//     port: 18627,
//     host: 'mqtt://driver.cloudmqtt.com',
//     clientId: 'alexajs_' + Math.random().toString(16).substr(2, 8),
//     username: 'kbzpqwzh',
//     password: 'eZM6IuJkDiQ2',
//     keepalive: 60,
//     reconnectPeriod: 1000,
//     protocolId: 'MQIsdp',
//     protocolVersion: 3,
//     clean: true,
//     encoding: 'utf8'
// };

//       var client = mqtt.connect('mqtt://driver.cloudmqtt.com', options);
//            client.on('connect', function() { 
//     console.log('connected');
//     var topic = endtopic.substr(0,4);
//    // var value = percentage;
   
//      if(percentage.length === 4){
//          percentage = 'adj10';
//     }
   
//     if(percentage === 'adj100'){
//          percentage = 'adj99';
//     }
//    // var percentage = '99';
//     client.publish(topic, percentage, function() {
//             console.log("Message is published");
//         client.end(); 
//     });
//    context.succeed(response); 
// });
//     }
    
// };

// var req={ "directive": { "header": { "namespace": "Alexa.Discovery", "name": "Discover", "payloadVersion": "3", "messageId": "1bd5d003-31b9-476f-ad03-71d471922820" }, "payload": { "scope": { "type": "BearerToken", "token": "access-token-from-skill" } } } }
// var con={
//     succeed:null
// }

// */
    

// }