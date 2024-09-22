const person = {
    name: 'Ajay',
    greet: () => {
        console.log(this); // Logs the `person` object
        console.log(this.name); // Logs 'Ajay'
    },
    welcome: function () {
        setTimeout(function () {
            console.log("this in regular object", this); // golbal object
        }, 1000);
    },
    welcome2: function () {
        setTimeout(() => {
            console.log("this in arrow object", this); //lexical scope;
        }, 1000);
    }
};

person.greet(); // Calling the method greet
person.welcome(); // global object
person.welcome2(); // object


class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }

    delayedGreet() {
        setTimeout(function () {
            console.log(this.name); // `this` refers to the global object (or undefined in strict mode)
        }, 1000);
    }
}

const person2 = new Person('Ajay');
person2.greet(); // Output: 'Ajay'
person2.delayedGreet(); // Output: undefined (or error in strict mode)
