
//obtain path of current file
console.log( __filename );


//directory:
console.log(__dirname);


//delay the callback:
function test(){ 
	console.log('I was delayed by 2 sec')
}
var timer = setTimeout(test,2000);


//stop a timer previously started:
clearTimeout(timer);

//Run a callback repeatedly:
var repeat = setInterval(test,1000);

//Clear the above:
clearInterval(repeat);