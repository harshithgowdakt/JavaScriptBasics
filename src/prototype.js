function Particle() {
    this.x = 100;
    this.y = 99;
}

Particle.prototype.show = function () {
    console.log("point ", this.x, this.y);
}

var p = new Particle();

console.log("p.__proto__", p.__proto__); //Particle prototype
console.log("p.__proto__.__proto__", p.__proto__.__proto__); //Object.prototype
console.log("p.__proto__.__proto__.__proto__", p.__proto__.__proto__.__proto__); //null

console.log("Particle.prototype", Particle.prototype); //Particle prototype
console.log("Particle.prototype.__proto__", Particle.prototype.__proto__); //Object.prototype
console.log("Object.prototype", Object.prototype);


//Performance difference object instance vs prototype
function FunctionX() {
    this.print = function () {
        console.log("Calling print! ");
    }
}

function FunctionY() {
}

FunctionY.prototype.print = function () {
    console.log("Calling print!");
}

var xobjects = [];
console.time('x');
for (let i = 0; i < 2000000; i++) {
    xobjects.push(new FunctionX());
}
console.timeEnd('x');

var yobjects = [];
console.time('y');
for (let i = 0; i < 2000000; i++) {
    yobjects.push(new FunctionY());
}
console.timeEnd('y');