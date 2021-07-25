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