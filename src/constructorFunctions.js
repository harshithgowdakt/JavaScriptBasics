
/*
   When a function is executed with new, it does the following steps:
1. A new empty object is created and assigned to this.
2. The function body executes. Usually it modifies this, adds new properties to it.
3. The value of this is returned
*/

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getRadius = function () {
    return this.radius;
}

Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
}

Circle.prototype.getCircumference = function () {
    return 2 * Math.PI * this.radius;
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


// callable and constructable

function isConstructor(f) {
    try {
        new f();
    } catch (err) {
        if (err.message.indexOf('is not a constructor') >= 0) {
            return false;
        }
    }
    return true;
}

function test(f, name) {
    console.log(`${name} is constructable: ${isConstructor(f)}`);
}

function foo() { }
test(foo, 'function declaration');
test(function () { }, 'function expression');
test(() => { }, 'arrow function');

class Foo { }
test(Foo, 'class declaration');
test(class { }, 'class expression');

test({ foo() { } }.foo, 'object method');

class Foo2 {
    static bar() { }
    bar() { }
}
test(Foo2.bar, 'static class method');
test(new Foo2().bar, 'class method');

test(new Function(), 'new Function()');