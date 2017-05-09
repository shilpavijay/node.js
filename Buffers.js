
//Ways of creating Buffers:
var b1  = new Buffer(80);
console.log(b1);

var b2 = new Buffer([1,2,3,4,5]);
console.log(b2);

var b3 = new Buffer("A new buffer","ascii");
console.log(b3);

buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {  
	buf[i] = i + 97;
}
console.log(buf);


//Writing to the Buffer:
len = buf.write("Writing to the First Buffer.");
console.log("# of octets written: " + len); 


//Reading from the Buffer
console.log(buf.toString(undefined));


//converting buffer to JSON:
var json = buf.toJSON(buf);
console.log(json);


//concatenate buffers:
var buf1 = new Buffer('I am learning ');
var buf2 = new Buffer('NodeJS'); 
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());


//copy a Buffer:
var buf4 = new Buffer(30);
buf3.copy(buf4);
console.log(buf4.toString());


//Slicing:
console.log(buf4.slice(0,5).toString());
