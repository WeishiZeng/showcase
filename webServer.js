var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Yo Anna! You are at ' + req.url);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
