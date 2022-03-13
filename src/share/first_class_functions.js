// pass function as argument
function a(b) {
    if (typeof b === 'function') {
        b();
    }
}

a(function () { console.log("hello") });

// return function
function c() {
    return function () {
        console.log("hello");
    }
}

var d = c();
d();

// assign function to variable
var x = function () {
    console.log("hello");
}

x();