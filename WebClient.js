
var http = require('http');

var options = { host: 'localhost', port: '8080', path: '/index.htm'};

var callback = function(response){ 
	var body=''; 
	response.on('data', function(data){  
		body += data; 
	}); 
	response.on('end', function(){  
		console.log(body); 
	});
}

var request = http.request(options,callback);request.end();

//Run WebClient and WebServer on two separate consoles to see the request and response.