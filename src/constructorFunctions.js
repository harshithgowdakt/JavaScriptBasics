
/*
   When a function is executed with new, it does the following steps:
1. A new empty object is created and assigned to this.
2. The function body executes. Usually it modifies this, adds new properties to it.
3. The value of this is returned
*/

function Circle(radius) {
    this.radius = radius;

    this.getRadius = function () {
        return this.radius;
    }

    this.getDiameter = function () {
        return 2 * this.radius;
    }

    this.getCircumference = function () {
        return 2 * Math.PI * this.radius;
    }
}

Circle.prototype.getArea = function () {
    return 2 * Math.PI * this.radius * this.radius;
}

let circle = new Circle(2);

console.log("circle", circle);
console.log("radius", circle.getRadius());
console.log("diameter", circle.getDiameter());
console.log("circumference", circle.getCircumference());
console.log("area", circle.getArea());

//factory method of creating object
function circleFactory(radius) {
    return {
        radius: radius,
        getDiameter: function () {
            return 2 * this.radius;
        },
        getArea: function () {
            return 2 * Math.PI * this.radius;
        },
        getCircumference: function () {
            return 2 * this.radius;
        }
    }
}

let circle2 = circleFactory(2);
console.log("circle", circle2);
console.log("radius", circle2.getRadius());
console.log("diameter", circle2.getDiameter());
console.log("circumference", circle2.getCircumference());
console.log("area", circle2.getArea());