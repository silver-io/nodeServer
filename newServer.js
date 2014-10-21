var
http = require('http'),
path = require('path'),
fs = require('fs');

function requestHandler(request, response) {
  var
  content = '',
  fileName = path.basename(request.url),
  localFolder = __dirname + '/public/';

  if(fileName === 'index.html'){
      content = localFolder + fileName;
      fs.readFile(content,function(err,contents) {
        if(!err) {
          res.end(contents);
        } else {
           console.dir(err);
        };
      });
  } else  {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('<h1>Page not found.</h1>');
  };
};
http.createServer(requestHandler)
.listen(3000);
