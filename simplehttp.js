var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   response.end('Your first Node.js code\n');
}).listen(8081);

console.log('This prints on console');
//Server running at http://127.0.0.1:8080/