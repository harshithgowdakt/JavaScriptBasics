function CustomEventEmitter() {
    this.events = {};
}

CustomEventEmitter.prototype.subscribe = function (event, fn) {
    if (this.events[event]) {
        this.events[event].push(fn);
    } else {
        this.events[event] = [];
        this.events[event].push(fn);
    }
}

CustomEventEmitter.prototype.emit = function (event, ...arguments) {
    if (this.events[event]) {
        this.events[event].forEach((fn) => {
            fn.apply(this, arguments);
        });
    }
}

let newEvent = new CustomEventEmitter();
newEvent.subscribe('data', (data) => {
    console.log()
});

newEvent.emit('data', 'hello, world');