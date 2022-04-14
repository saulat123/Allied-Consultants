function foo() {
    return ["asdfg", undefined];
}
// var a = foo();
// console.log(a);
var a, b;
a = foo();
console.log(...a);