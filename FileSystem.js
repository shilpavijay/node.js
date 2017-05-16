
var fs = require('fs');

//Asynchronously reading from file
fs.readFile('junk.txt', function(err,data){ 
	if(err){ 
		console.error(err); 
	} 
	console.log(data.toString()); 
	console.log(' ');});


//Synchronous
var read = fs.readFileSync('newjunk.txt');
console.log(read.toString());
console.log(' ');


//open
fs.open('junk.txt','r+', function(err,data){ 
	if(err){  
		console.log(err) 
	} 
	console.log('File opened');
});


//Write to file
fs.writeFile('test.txt','Written from Node.js',function(err){ 
	if(err) {  
		console.error(err); 
	}
});
fs.readFile('test.txt',function(err,data){ 
	console.log(data.toString());
});
