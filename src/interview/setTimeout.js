const arr = [10, 20, 30]

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(i, arr, arr[i], arr.length);
    }, 3000)
}


console.log("" + 1 + 0);
console.log(1 + 0 + "");
console.log(1 + 3 + "awd");
console.log("awd" + 1 + 3);

var x = {}
var foo = function () {
    this.hello = "Hi"
    return this
}

x.bar = foo;
console.log(x.bar().bar().bar().hello);


var z = [typeof z, typeof y][0]
var x = typeof typeof z;
console.log(x)


foo();
let foo = function () {
    console.log("foo");
}
foo()
function foo() {
    console.log("foo")
}

m = parseInt('A', 10)
n = parseInt('A', 11)
console.log(m, n);

var a = 100;
function test() {
    if (false) {
        var a = 199;
    }
    console.log(a);
}
test()

console.log(parseInt("456adc"))

function counter() {
    var n = 0;
    return {
        count: function () { return n++ },
        reset: function () { n = 0 }
    }
}

var c = counter(), d = counter();
c.count()
d.count()
c.reset()
c.count()
console.log(d.count());
console.log((true + false) > 2 + true);
