var wit = require('node-wit');
var fs = require('fs');
var ACCESS_TOKEN = "PYTUKJACUMZQHNSRJ33LFJYYQXZKSHB4";

console.log("Sending text & audio to Wit.AI");

// wit.captureTextIntent(ACCESS_TOKEN, "Hello world", function (err, res) {
//     console.log("Response from Wit for text input: ");
//     if (err) console.log("Error: ", err);
//     console.log(JSON.stringify(res, null, " "));
// });

var stream = fs.createReadStream('sample.wav');
wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res) {
    console.log("Response from Wit for audio stream: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
});

// http://stackoverflow.com/questions/7498648/how-to-do-this-curl-operation-in-node-js
// https://github.com/dhruvbird/http-sync
// https://github.com/chriso/curlrequest
// http://stackoverflow.com/questions/6819143/curl-equivalent-in-nodejs
// https://github.com/jiangmiao/node-curl
//   sox -d -b 16 -c 1 -r 16k sample.wav
// http://www.dzone.com/snippets/execute-unix-command-nodejs
