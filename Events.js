var events = require('events');
var eventEmitter = new events.EventEmitter;
var connHandler = function conn() { 
  console.log('connection done'); 
  eventEmitter.emit('data');
};

eventEmitter.on('connection',connHandler);
eventEmitter.on('data',function(){ 
  console.log('data received successfully')
});

eventEmitter.on('test_output',function(){ 
  console.log('Firing a test event');
});

eventEmitter.emit('connection');
eventEmitter.emit('test_output');
console.log('End');
