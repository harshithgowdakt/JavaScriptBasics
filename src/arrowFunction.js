let person1 = {
    firstname: 'Harshith',
    lastname: 'Gowda',
    sayHello: function () {
        console.log(`Hello ${this.firstname}`);
    }
}
person1.sayHello();

let person2 = {
    firstname: 'Harshith',
    lastname: 'Gowda',
    sayHello: () => {
        console.log(`Hello ${this.firstname}`);
    }
}
person2.sayHello();