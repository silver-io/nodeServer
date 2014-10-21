var
http = require('http'),
path = require('path'),
fs = require('fs');

http.createServer(requestHandler)

.listen(3000);
console.log('this is running')
