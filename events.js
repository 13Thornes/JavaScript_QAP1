// Project: explore http code, create http srver
// Author: Samantha Thorne
// Date: 18/05/2024

var events = require('events');

var eventEmitter = new events.EventEmitter();

var eventHandler = function () {
    console.log('wee woo, wee woo!');
}

eventEmitter.on('ambulance', eventHandler);

eventEmitter.emit('ambulance');