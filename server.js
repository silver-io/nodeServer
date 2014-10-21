var http = require('http');

  http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Node server in localhost:3000');
}).listen(3000);
  console.log('this is running')