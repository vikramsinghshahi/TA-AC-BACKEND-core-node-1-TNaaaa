var http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method);
  res.statusCode = 201;
  res.setHeader('content-Type', 'text/html');
  res.end('<h2>wlecome<h2>');
}

server.listen(4444, () => console.log('server is running'));
