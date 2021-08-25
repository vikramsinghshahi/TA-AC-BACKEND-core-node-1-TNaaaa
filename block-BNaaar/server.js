var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.end('This is the end');
}

server.listen(5000, () => console.log('server is running'));
