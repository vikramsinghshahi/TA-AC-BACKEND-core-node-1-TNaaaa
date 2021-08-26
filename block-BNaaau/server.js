var http = require('http');

var server = http.createServer(handleServer);

// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

function handleServer(req, res) {
  console.log(req, res);
  res.end('welcome');
}

server.listen(5000, () => {
  console.log('server is running');
});

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

function handleServer(req, res) {
  res.end('My first server in NodeJS');
}

server.listen(5100, () => {
  console.log('server is ruunnig');
});

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

function handleServer(req, res) {
  res.end('My first server in NodeJS');
}

server.listen(5555, () => {
  console.log('server is ruunnig');
});
