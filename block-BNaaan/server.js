var http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(request, response) {
  //   console.log(request, response);
  console.log(request.headers);
  console.log(request.method, request.url);
  response.end('Welcome');
}

server.listen(3000, () => console.log('server is running'));
