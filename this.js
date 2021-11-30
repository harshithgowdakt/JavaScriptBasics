let x = {}

let foo = function () {
    this.hello = "hi";
    return this;
}

x.bar = foo;
console.log(x.bar().bar().hello);
