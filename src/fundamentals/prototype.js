function Particle() {
    this.x = 100;
    this.y = 99;
}

Particle.prototype.show = function () {
    console.log("point ", this.x, this.y);
}

var p = new Particle();

console.log("p.__proto__", p.__proto__); //Particle.prototype
console.log("p.__proto__.__proto__", p.__proto__.__proto__); //Object.prototype
console.log("p.__proto__.__proto__.__proto__", p.__proto__.__proto__.__proto__); //null

console.log("Particle.prototype", Particle.prototype); //Particle.prototype
console.log("Particle.prototype.__proto__", Particle.prototype.__proto__); //Object.prototype
console.log("Object.prototype", Object.prototype); //Object.prototype


//Performance difference object instance vs prototype
function FunctionX() {
    this.print = function () {
        console.log("Calling print! ");
    }
}

var xobjects = [];
console.time('x');
for (let i = 0; i < 2000000; i++) {
    xobjects.push(new FunctionX());
}
console.timeEnd('x');

function FunctionY() {
}

FunctionY.prototype.print = function () {
    console.log("Calling print!");
}

var yobjects = [];
console.time('y');
for (let i = 0; i < 2000000; i++) {
    yobjects.push(new FunctionY());
}
console.timeEnd('y');

//Array

let arr = [0, 1, 2, 3];
console.log("arr.__proto__", arr.__proto__); //Array.prototype
console.log("Array.prototype", Array.prototype); //Array.prototype
console.log("Array.prototype.__proto__", Array.prototype.__proto__); //Object.prototype


/*
Take these 2 examples:

var A = function() { this.hey = function() { alert('from A') } };

var A = function() {}
A.prototype.hey = function() { alert('from prototype') };

a) A function is an object in JavaScript. EVERY object in JavaScript
gets an internal property (meaning, you can't access it like other properties,
except maybe in browsers like Chrome), often referred to as __proto__
(you can actually type anyObject.__proto__ in Chrome to see what it references.
This is just that, a property, nothing more. A property in JavaScript = a variable
inside an object, nothing more. What do variables do? They point to things.

So what does this __proto__ property points to? Well, usually another object
(we'll explain why later). The only way to force JavaScript for the __proto__
property to NOT point to another object is to use var newObj = Object.create(null).
Even if you do this, the __proto__ property STILL exists as a property of the object,
just it doesn't point to another object, it points to null.

Here's where most people get confused:

When you create a new function in JavaScript (which is an object as well, remember?),
the moment it is defined, JavaScript automatically creates a new property on that function
called prototype. Try it:

var A = [];
A.prototype // undefined
A = function() {}
A.prototype // {} // got created when function() {} was defined

A.prototype is TOTALLY DIFFERENT from the __proto__ property. In our example,
'A' now has TWO properties called 'prototype' and __proto__ . This is a big
confusion for people. prototype and __proto__ properties are in no way related,
they're separate things pointing to separate values.

You may wonder: Why does JavaScript has __proto__ property created on every
single object? Well, one word: delegation. When you call a property on an object
and the object doesn't have it, then JavaScript looks for the object referenced
by __proto__ to see if it maybe has it. If it doesn't have it, then it looks at
that object's __proto__ property and so on...until the chain ends. Thus the name
prototype chain. Of course, if __proto__ doesn't point to an object and instead
points to null, well tough luck, JavaScript realizes that and will return you
undefined for the property.

You may also wonder, why does JavaScript creates a property called prototype for
a function when you define the function? Because it tries to fool you, yes fool
you that it works like class-based languages.

Let's go on with our example and create an "object" out of A:

var a1 = new A();

There's something happening in the background when this thing happened. a1 is
an ordinary variable which was assigned a new, empty object.

The fact that you used the operator new before a function invocation A() did
something ADDITIONAL in the background. The new keyword created a new object
which now references a1 and that object is empty. Here's what happening additionally:

We said that on each function definition there's a new property created called
prototype (which you can access it, unlike with the __proto__ property) created?
Well, that property is being used now.

So we're now at the point where we have a freshly baked empty a1 object. We said
that all objects in JavaScript have an internal __proto__ property which points
to something (a1 also has it), whether it's null or another object. What the new
operator does is that it sets that __proto__ property to point to the function's
prototype property. Read that again. It's basically this:

a1.__proto__ = A.prototype;

We said that A.prototype is nothing more than an empty object (unless we change
it to something else before defining a1). So now basically a1.__proto__ points
to the same thing A.prototype points to, which is that empty object. They both
point to the same object which was created when this line happened:

A = function() {} // JS: cool. let's also create A.prototype pointing to empty {}
Now, there's another thing happening when var a1 = new A() statement is processed.
Basically A() is executed and if A is something like this:

var A = function() { this.hey = function() { alert('from A') } };
All that stuff inside function() { } is going to execute. When you reach the this.
hey.. line, this is changed to a1 and you get this:

a1.hey = function() { alert('from A') }
I won't cover why this changes to a1 but this is a great answer to learn more.

So to summarize, when you do var a1 = new A() there are 3 things happening in
the background:

A totally new empty object is created and assigned to a1. a1 = {}
a1.__proto__ property is assigned to point at the same thing as A.prototype points
to (another empty object {} )

The function A() is being executed with this set to the new, empty object created
in step 1 (read the answer I referenced above as to why this changes to a1)

Now, let's try to create another object:

var a2 = new A();
Steps 1,2,3 will repeat. Do you notice something? The key word is repeat. Step 1:
a2 will be a new empty object, step 2: its __proto__ property will point to the same
thing A.prototype points to and most importantly, step 3: function A() is AGAIN executed,
which means that a2 will get hey property containing a function. a1 and a2 have two
SEPARATE properties named hey which point to 2 SEPARATE functions! We now have duplicate
functions in same two different objects doing the same thing, oops...You can imagine the
memory implications of this if we have 1000 objects created with new A, after all functions
declarations take more memory than something like the number 2. So how do we prevent this?

Remember why the __proto__ property exists on every object? So that if you retrieve the
yoMan property on a1 (which doesn't exist), its __proto__ property will be consulted,
which if it's an object (and is most cases it is), it will check if it contains yoMan,
and if it doesn't, it will consult that object's __proto__ etc. If it does, it will take
that property value and display it to you.

So someone decided to use this fact + the fact that when you create a1, its __proto__
property points to the same (empty) object A.prototype points to and do this:

var A = function() {}
A.prototype.hey = function() { alert('from prototype') };
Cool! Now, when you create a1, it again goes through all of the 3 steps above, and in
step 3, it doesn't do anything, since function A() has nothing to execute. And if we do:

a1.hey
It will see that a1 does not contain hey and it will check its __proto__ property
object to see if it has it, which is the case.

With this approach we eliminate the part from step 3 where functions are duplicated
on each new object creation. Instead of a1 and a2 having a separate hey property,
now NONE of them has it. Which, I guess, you figured out yourself by now. That's
the nice thing...if you understand __proto__ and Function.prototype, questions like these will be pretty obvious.

NOTE: Some people tend to not call the internal Prototype property as __proto__,
I've used this name through the post to distinguish it clearly to the Functional.
prototype property as two different things.


https://stackoverflow.com/questions/310870/use-of-prototype-vs-this-in-javascript
https://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
https://stackoverflow.com/questions/572897/how-does-javascript-prototype-work
*/