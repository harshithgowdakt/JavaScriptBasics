
/*
1. Creates a blank, plain JavaScript object.

2. Adds a property to the new object (__proto__) that links to the constructor
function's prototype object

Note: Properties/objects added to the construction function prototype are therefore
accessible to all instances created from the constructor function (using new).

3. Binds the newly created object instance as the this context (i.e. all references to
this in the constructor function now refer to the object created in the first step).

4. Returns this if the function doesn't return an object.

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


//exmaples
function foo() {
    this.a = 1;
}

foo();  // using function as a regular function. Ctx is window.
console.log(this, this.a);  // prints "1"
foo.call(this);  // explicitly specify execution ctx. The same as just foo() call

var instance = new foo();  // using foo as a constructor
console.log(instance.a);   // prints "1"

// actually you can do it without new keyword
var instance = {};  // manually create new object
foo.call(instance); // manually call foo against this object
console.log(instance.a);   // prints "1"
