// Project: explore events code, create siren event
// Author: Samantha Thorne
// Date: 18/05/2024


// require events
var events = require('events');

// create a new event
var eventEmitter = new events.EventEmitter();

// create event handler
var eventHandler = function () {
    console.log('wee woo, wee woo!!!');
}

// assign event handler to event
eventEmitter.on('siren', eventHandler);

// fire the event
eventEmitter.emit('siren');