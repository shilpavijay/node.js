
var events = require('events'); 


 //AddListener(event, Listener): 
var eventEmitter = new events.EventEmitter; 
var SampleListener = function() {    
	console.log('SampleListener'); 
} 

eventEmitter.addListener('connection',SampleListener);  
eventEmitter.emit('connection'); 


//emit(event)
var SecondListener = function(){ 
	console.log('SecondListener');
}
eventEmitter.addListener('connection',SecondListener);
eventEmitter.emit('connection');


//on(event, Listener):
eventEmitter.on('testdata',function(){ 
	console.log('Example - "on" method');
});
eventEmitter.emit('testdata');


//once(event, Listener):
eventEmitter.once('testonce',function(){ 
	console.log('Example - "once" method');
});
eventEmitter.emit('testonce');


//List all Listeners for the given event
var listnerlist = eventEmitter.listeners('testonce');
console.log(listnerlist);


//Get the count of number of listeners for the given event
var count = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(count);


// removeListeners
eventEmitter.removeListener('connection',SampleListener);
console.log('SampleListener removed');
eventEmitter.emit('connection');
console.log('Attempt to emit SampleListener failed!');


// removeAllListeners
eventEmitter.removeAllListeners('testdata');
eventEmitter.emit('testdata');
eventEmitter.emit('testonce');
console.log('Attempt failed! All Listeners Removed.');


// setMaxListeners
eventEmitter.setMaxListeners(2);
eventEmitter.emit('testonce');
