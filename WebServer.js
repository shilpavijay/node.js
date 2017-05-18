
//Creating a Web Server using Node.js
var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer( function(request,response){ 
	var path = url.parse(request.url).pathname; 
	console.log("Request received for path: " + path);
 
	fs.readFile(path.substr(1), function(err,data){  
		if(err){   
			console.log(err);   
			response.writeHead(404, {'Content-Type': 'text/html'});  
		}  
		else{   
			response.writeHead(200, {'Content-Type': 'text/html'});   
			response.write(data.toString());  }  
			response.end();
	});

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

// // NOTE: If the below error occurs, install 'cors': "npm install cors"

// { [Error: ENOENT: no such file or directory, open 'E:\Project\node\favicon.ico']
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'E:\\Project\\node\\favicon.ico' }