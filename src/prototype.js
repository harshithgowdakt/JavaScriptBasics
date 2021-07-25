function Particle() {
    this.x = 100;
    this.y = 99;
}

Particle.prototype.show = function () {
    console.log("point ", this.x, this.y);
}

var p = new Particle();

console.log("p.__proto__", p.__proto__);
console.log("p.__proto__.__proto__", p.__proto__.__proto__);
console.log("p.__proto__.__proto__.__proto__", p.__proto__.__proto__.__proto__);

console.log("Particle.prototype", Particle.prototype);
console.log("Particle.prototype", Particle.prototype.__proto__);
console.log("Object.prototype", Object.prototype);