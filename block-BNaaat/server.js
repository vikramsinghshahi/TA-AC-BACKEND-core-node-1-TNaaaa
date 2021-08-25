var http = require('http');
var fs = require('fs');

var server = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('content-type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });

    // fs.createReadStream('./node.html').pipe(res);
  }
}

server.listen(5555, () => {
  console.log('server is runnig');
});
