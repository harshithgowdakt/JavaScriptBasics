class Timer {
    constructor() {
        this.seconds = 0;
    }

    start() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds); // `this` refers to the Timer object
        }, 1000);
    }
}

const myTimer = new Timer();
myTimer.start();