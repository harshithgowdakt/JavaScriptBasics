
// example-1
function once() {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            console.log('do something here');
        }
    }
}

let executeOnce = once();
executeOnce();
executeOnce();
executeOnce();
executeOnce();

// example-2
function callOnce(fn, context) {
    let result;
    return function () {
        if (fn) {
            result = fn.call(context || this, arguments);
            fn = null;
        }
        return result;
    }
}

function sayHello() {
    console.log('hello world');
}

let callsOnlyOnce = callOnce(sayHello)
callsOnlyOnce();
callsOnlyOnce();