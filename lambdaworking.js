// -*- coding: utf-8 -*-

// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License (the "License")
// You may not use this file except in compliance with the License.
// A copy of the License is located at http://aws.amazon.com/asl/
//
// This file is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific
// language governing permissions and limitations under the License.

var mqtt=require('mqtt');
var https = require('https');
var axios=require("axios")
var payload = [] ;
var email = "";
var emailstring="";
var op;
var topic;
var node={}
var id;
var a1=   [                {
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
							}]


var a2=[
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
								 					"name":"powerState"
											}],
										//	 "retrievable": true
									}
							},
							{
								"type": "AlexaInterface",
								"interface": "Alexa",
								"version": "3"
							},
							{
									"interface": "Alexa.PercentageController",
									"version": "3",
									"type": "AlexaInterface",
									"properties": {
											"supported": [{
								 					"name": "percentage"
											}],
										//	 "retrievable": true
									}
							}]
    
exports.handler = function (request, context) {
    if (request.directive.header.namespace === 'Alexa.Discovery' && request.directive.header.name === 'Discover') {
        var token = request.directive.payload.scope.token;
        log("DEBUG:", "Discover request",  JSON.stringify(request));
        handleDiscovery(request, context, token);
    }
    else if (request.directive.header.namespace === 'Alexa.PowerController') {
          var token = request.directive.endpoint.scope.token;
        if (request.directive.header.name === 'TurnOn' || request.directive.header.name === 'TurnOff') {
            log("DEBUG:", "TurnOn or TurnOff Request", JSON.stringify(request));
             handlePowerControl(request, context,token);
        }
    }
    else if(request.directive.header.namespace ==="Alexa.PercentageController")
    {
        var token = request.directive.endpoint.scope.token;
        if(request.directive.header.name === 'SetPercentage')
        {
            log("DEBUG:", "Percentage Request", JSON.stringify(request));
             handlePercentage(request, context,token);
        }
    }
    else if (request.directive.header.namespace === 'Alexa.Authorization' && request.directive.header.name === 'AcceptGrant') {
        handleAuthorization(request, context);
    }

    function handleAuthorization(request, context) {
        // Send the AcceptGrant response
        var payload = {};
        var header = request.directive.header;
        header.name = "AcceptGrant.Response";
        log("DEBUG", "AcceptGrant Response: ", JSON.stringify({ header: header, payload: payload }));
        context.succeed({ event: { header: header, payload: payload } });
    }

    function handleDiscovery(request, context, token) {
        
        var header = request.directive.header;
        header.name = "Discover.Response";
       

console.log('start request to ');
console.log(token);

 function get_json(url, callback) {

https.get(url, function(res) {

 var body = '';

 res.on('data', function(chunk) {

 body += chunk;

});



 res.on('end', function() {

 var response = JSON.parse(body);

 // call function ----v

 callback(response);

 });
 });

 }

function get_json1(url, callback) {
    https.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
// call function ---v
   
            callback(response);
             
        });
    });
}

 emailstring ="https://api.amazon.com/user/profile?access_token="+token;
console.log(emailstring);

var myemail = get_json1(emailstring, function (resp) {
 email=String(resp.email);
    console.log("email:"+email);
  //email = "maheshlakshmipathi@gmail.com";
     var datafetch = "https://36b9-2406-7400-c8-888a-9ca2-1bf3-64dd-a9c.ngrok-free.app/alldevicebyemail/".concat(email);
        //var datafetch="https://36b9-2406-7400-c8-888a-9ca2-1bf3-64dd-a9c.ngrok-free.app/alldevicebyemail/rohan.pratap15@gmail.com"

         // -----------the url---v         ------------the callback---v
         
        
var mydata = get_json(datafetch, function (resp) {
    
    //console.log(resp);
    // payload.push(resp);
   //payload = {"endpoints":payload} 
   //context.succeed({ event: { header: header, payload: payload } });
   resp.forEach(function(table) {
       
       table.appliances.forEach((app)=>{
           
           
           
           const device = {
					"endpointId": app._id,
					"manufacturerName": "TwinV-smart home",
					"friendlyName": app.applianceName,
					"description": "Smart IOT Switch",
					"displayCategories": ["SWITCH"],
					"cookie": {
							"key1": "arbitrary key/value pairs for skill to reference this endpoint.",
							"key2": "There can be multiple entries",
							"key3": "but they should only be used for reference purposes.",
							"key4": "This is not a suitable place to maintain current endpoint state."
					},
					
					"capabilities":(app.capabilities=="switch")?a1:a2
				
			};
   // console.log(device);
    payload.push(device);

           
       }) 
       
       }
  );
console.log(payload);
   payload = {"endpoints":payload} ;
//   console.log(payload);
   context.succeed({ event: { header: header, payload: payload } });
});
});




         log("DEBUG", "Discovery Response: ", JSON.stringify({ header: header, payload: payload }));
        //
        
    }

    function log(message, message1, message2) {
        //console.log(message + message1 + message2);
    }

       async function handlePowerControl(request, context,token) {
           
        
        
         
        
       emailstring ="https://api.amazon.com/user/profile?access_token="+token;
         try{
           
           var usermail=await axios.get(emailstring)
           email=usermail.data.email
       //console.log("usermail:"+email)
         }
          catch(err)
          {
           console.log("err"+err)
           }
           id=request.directive.endpoint.endpointId;


   var searchUrl=`https://36b9-2406-7400-c8-888a-9ca2-1bf3-64dd-a9c.ngrok-free.app/getApplianceByIdandEmail?mail=${email}&id=${id}`;
 //var searchUrl=`https://cb49-2406-7400-c8-888a-9da2-38b5-8805-406c.ngrok-free.app/getApplianceByIdandEmail?mail=rohan.pratap15@gmail.com&id=64548a2c280b7cf08b8b1eb8`;
        try{
        op=await axios.get(searchUrl);
 //console.log(op.data)
       topic=op.data.Topic;
       node["node"]=op.data.node;
         }
        catch(err){
          console.log(err)
         }
         
    
    

        
         // get device ID passed in during discovery
         function power2(){}
        var requestMethod = request.directive.header.name;
        var responseHeader = request.directive.header;
        responseHeader.namespace = "Alexa";
        responseHeader.name = "Response";
        responseHeader.messageId = responseHeader.messageId + "-R";
        // get user token pass in request
        var requestToken = request.directive.endpoint.scope.token;
        var powerResult;
        
        if (requestMethod === "TurnOn") {
            console.log(requestMethod)
            var dim=topic.split("-")
            if(dim[1].length===3)
            {
                node["bg"] = 100
            }
            else{
                node["sts"] = 1;
            }
            
            console.log(node["sts"])
            // mqttMessage["sts"]=1;
            // Make the call to your device cloud for control
            // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
            powerResult = "ON";
            console.log("topic:"+topic);
            console.log("node:"+node);
           power(node)
        }
       else if (requestMethod === "TurnOff") {
           console.log(requestMethod)
           var dim=topic.split("-")
           if(dim[1].length===3)
            {
                node["bg"] = 0
            }
            else{
                node["sts"] = 0;
            }
           //console.log(node["sts"])
        //   mqttMessage["sts"]=0;
            // Make the call to your device cloud for control and check for success
            // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
            powerResult = "OFF";
           console.log("topic:"+topic);
            console.log("node:"+node);
            power(node)
        }
        // Return the updated powerState.  Always include EndpointHealth in your Alexa.Response
        // Datetime format for timeOfSample is ISO 8601, `YYYY-MM-DDThh:mm:ssZ`.
        var contextResult = {
            "properties": [{
                "namespace": "Alexa.PowerController",
                "name": "powerState",
                "value": powerResult,
                "timeOfSample": "2022-09-03T16:20:50.52Z", //retrieve from result.
                "uncertaintyInMilliseconds": 50
            },
            {
                "namespace": "Alexa.EndpointHealth",
                "name": "connectivity",
                "value": {
                "value": "OK"
            },
            "timeOfSample": "2022-09-03T22:43:17.877738+00:00",
            "uncertaintyInMilliseconds": 0
            }]
        };
        var response = {
            context: contextResult,
            event: {
                header: responseHeader,
                endpoint: {
                    scope: {
                        type: "BearerToken",
                        token: requestToken
                    },
                    endpointId: id
                },
                payload: {}
            }
        };
       
     
     function power(Node)
     {
         console.log(Node)
           var options = {
    port: 1883,
    host: 'ws://ec2-3-82-142-212.compute-1.amazonaws.com',
    clientId: 'lambda',
    // username: 'kbzpqwzh',
    // password: 'eZM6IuJkDiQ2',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

     
     var client = mqtt.connect('ws://ec2-3-82-142-212.compute-1.amazonaws.com', options);
           client.on('connect', function() { 
    console.log('connected');
    
    
    // if(powerResult === "ON")
    // {
    // node["sts"] = 1;
    // }
    // else if (powerResult === "OFF")
    // {
    //   node["sts"]=0;
    // }
    
    var n=JSON.stringify(Node)
    client.publish(topic,n , function() {
            console.log("Message is published:"+topic);
            console.log(Node)
        client.end(); 
    });
    
    
       
    
    
           
   context.succeed(response); 
       });
     }
     
     
     
     
     
     
     
     
   
        //console.log(mqttMessage)
        log("DEBUG", "Alexa.PowerController ", JSON.stringify(response));
       // context.succeed(response);
    }
    
    
    async function handlePercentage(request,context,token)
    {       if(node["sts"])
    {
           delete node["sts"]
    }
    var node1={}
    
        emailstring ="https://api.amazon.com/user/profile?access_token="+token;
         try{
           
           var usermail=await axios.get(emailstring)
           email=usermail.data.email
       //console.log("usermail:"+email)
         }
          catch(err)
          {
           console.log("err"+err)
           }
           id=request.directive.endpoint.endpointId;


   var searchUrl=`https://36b9-2406-7400-c8-888a-9ca2-1bf3-64dd-a9c.ngrok-free.app/getApplianceByIdandEmail?mail=${email}&id=${id}`;
 //var searchUrl=`https://cb49-2406-7400-c8-888a-9da2-38b5-8805-406c.ngrok-free.app/getApplianceByIdandEmail?mail=rohan.pratap15@gmail.com&id=64548a2c280b7cf08b8b1eb8`;
        try{
        op=await axios.get(searchUrl);
 //console.log(op.data)
       topic=op.data.Topic;
       node1["node"]=op.data.node;
         }
        catch(err){
          console.log(err)
         }
         

        
        var requestMethod = request.directive.payload.percentage;
  var responseHeader = request.directive.header;
  var endtopic = request.directive.endpoint.endpointId;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  var requestToken = request.directive.endpoint.scope.token;
  
  
  var ip=parseInt(request.directive.payload.percentage)
  var speed
  if(ip<=5)speed=((ip/5)*100)
  else speed=100
  
  node1["bg"]=speed
  
  var response = {
    context: {
      properties: [
        {
          namespace: "Alexa.PercentageController",
          name: "percentage",
          value: requestMethod,
          timeOfSample: "2017-02-03T16:20:50.52Z",
          uncertaintyInMilliseconds: 1000,
        },
      ],
    },
    event: {
      header: {
        namespace: "Alexa",
        name: "Response",
        payloadVersion: "3",
        messageId: "abc-123-def-456",
        correlationToken: "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg==",
      },
      endpoint: {
        scope: {
          type: "BearerToken",
          token: requestToken,
        },
        endpointId: "demo_id1",
      },
      payload: {},
    },
  };
  
   var options = {
    port: 1883,
    host: 'ws://ec2-3-82-142-212.compute-1.amazonaws.com',
    clientId: 'lambda',
    // username: 'kbzpqwzh',
    // password: 'eZM6IuJkDiQ2',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};

     
     var client = mqtt.connect('ws://ec2-3-82-142-212.compute-1.amazonaws.com', options);
           client.on('connect', function() { 
    console.log('connected');
    
    
    // if(powerResult === "ON")
    // {
    // node["sts"] = 1;
    // }
    // else if (powerResult === "OFF")
    // {
    //   node["sts"]=0;
    // }
    console.log(node1)
    var n=JSON.stringify(node1)
    client.publish(topic,n, function() {
            console.log("Message is published:"+topic);
            console.log(n)
        client.end(); 
    });
    
    
       
    
    
           
   context.succeed(response); 
       });
       
  log("DEBUG", "Alexa.PercentageController ", JSON.stringify(response));
  
        
        
        
    }
    
    
    
    
    
    
    
};
