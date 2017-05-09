var events = require('events');

//AddListener(event, Listener):

var eventEmitter = new events.EventEmitter;
var SampleListener = function() { 
  console.log('SampleListener')
}

eventEmitter.addListener('connection',SampleListener);
eventEmitter.emit('connection');
