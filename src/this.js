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


function Person(name) {
    this.name = name;
}

const person1 = new Person('Ajay');
console.log(person1.name); // Logs 'Ajay