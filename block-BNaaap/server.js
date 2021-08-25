var http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, rec) {
  console.log(req);
  rec.end('wlecome');
}

server.listen(4444, () => console.log('server is running'));
