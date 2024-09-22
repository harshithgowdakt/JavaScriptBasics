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

// person.greet(); // Calling the method greet
person.welcome();
person.welcome2();