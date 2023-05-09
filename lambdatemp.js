function handlepercentage(request, context) {
  // get device ID passed in during discovery
  var requestMethod = request.directive.payload.percentage;
  var responseHeader = request.directive.header;
  var endtopic = request.directive.endpoint.endpointId;
  responseHeader.namespace = "Alexa";
  responseHeader.name = "Response";
  responseHeader.messageId = responseHeader.messageId + "-R";
  // get user token pass in request
  var requestToken = request.directive.endpoint.scope.token;

  // var brightness = request.directive.payload.brightness;
  // var color=String(request.directive.payload.color.hue)+","+String(request.directive.payload.color.saturation)+","+String(request.directive.payload.color.brightness);
  var percentage = "adj" + String(request.directive.payload.percentage);

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
  log("DEBUG", "Alexa.PercentageController ", JSON.stringify(response));

  var options = {
    port: 18627,
    host: "mqtt://driver.cloudmqtt.com",
    clientId: "alexajs_" + Math.random().toString(16).substr(2, 8),
    username: "kbzpqwzh",
    password: "eZM6IuJkDiQ2",
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: "MQIsdp",
    protocolVersion: 3,
    clean: true,
    encoding: "utf8",
  };

  var client = mqtt.connect("mqtt://driver.cloudmqtt.com", options);
  client.on("connect", function () {
    console.log("connected");
    var topic = endtopic.substr(0, 4);
    var value = percentage;

    if (percentage.length === 4) {
      percentage = "adj10";
    }

    if (percentage === "adj100") {
      percentage = "adj99";
    }
    //var percentage = '99';
    client.publish(topic, percentage, function () {
      console.log("Message is published");
      client.end();
    });
    context.succeed(response);
  });
}
