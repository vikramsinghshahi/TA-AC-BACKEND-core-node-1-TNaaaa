var http = require('http');

let server = http.serverResponse(handleResponse);

function handleResponse(resend, recive) {}

server.listen(3000, 'localhost');
