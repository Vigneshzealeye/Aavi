//var mqtt=require('mqtt');
const http = require('http');
const https = require('https');
var payload = [] ;
        



        const handler = function (request, context) 
{
 


    // if (request.directive.header.namespace === 'Alexa.Discovery' && request.directive.header.name === 'Discover') {
    //     var token = request.directive.payload.scope.token;
    //     // log("DEBUG:", "Discover request",  JSON.stringify(request));
    //     // handleDiscovery(request, context, token);
    // }


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
       
                    callback("email")
        }

        var myemail = get_json1("emailstring", function (resp) {
            
             //email = "maheshlakshmipathi@gmail.com";
                var datafetch = `https://5a4c-2406-7400-c8-888a-34e1-1e69-6db4-b064.ngrok-free.app/alldevicebyemail/rohan.pratap15@gmail.com`;
                //var datafetch = "https://5a4c-2406-7400-c8-888a-34e1-1e69-6db4-b064.ngrok-free.app/alldevicebyemail/Rohan1@gmail.com";
           
           
                    // -----------the url---v         ------------the callback---v
                    
                   
           var mydata = get_json(datafetch, function (resp) {
               console.log(resp)

           })
           
        })




}

var req={ "directive": { "header": { "namespace": "Alexa.Discovery", "name": "Discover", "payloadVersion": "3", "messageId": "1bd5d003-31b9-476f-ad03-71d471922820" }, "payload": { "scope": { "type": "BearerToken", "token": "access-token-from-skill" } } } }
var con={
    succeed:null
}

handler(req,con)