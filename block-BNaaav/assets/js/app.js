var http = require('http');
var fs = require('fs');

var server = http.createServer(handleServer);

function handleServer(req, res) {}

server.listen(3000, () => console.log('server is listenin at 3000'));
