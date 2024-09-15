const person = {
    name: 'Ajay',
    greet:  ()=> {
        console.log(this); // Logs the `person` object
        console.log(this.name); // Logs 'Ajay'
    }
};

person.greet(); // Calling the method greet



function Person(name) {
    this.name = name;
}

const person1 = new Person('Ajay');
console.log(person1.name); // Logs 'Ajay