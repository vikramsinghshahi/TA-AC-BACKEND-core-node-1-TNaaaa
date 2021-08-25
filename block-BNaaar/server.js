var http = require('http');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-type', 'text/plain');
    res.end('Welcome to home page');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-type', 'text/plain');
    res.end('<h2>This is about page</h2>');
  } else if (req.method === 'POST' && req.url === '/about') {
    res.setHeader('Content-type', 'application/json');
    res.end('{message: this is a post request}');
  }
}

server.listen(5000, () => {
  console.log('server is running');
});
