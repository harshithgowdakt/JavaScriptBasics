const person = {
    name: 'Ajay',
    greet: () => {
        console.log(this); // `this` refers to the global object, not `person`
    }
};

person.greet()