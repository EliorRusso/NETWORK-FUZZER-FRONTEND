'use strict';
let http = require('http');
function requestCallback(request, response){
    console.log("Hello");
}
let server = http.createServer(requestCallback);
server.listen(8080);
console.log("Listening");