const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

eventEmitter.on('done', () => {
    console.log('Third listner');
});

eventEmitter.on('done', () => {
    console.log('Second listner');
});

eventEmitter.on('done', () => {
    console.log('First listner');
});

eventEmitter.on('error', () => {
    console.log('Error occured');
});


eventEmitter.emit('done');
eventEmitter.emit('error');


