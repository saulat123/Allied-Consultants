// function f(x, arr = [1]) {
//     return arr.push(x);
// }

// // console.log(f(1));
// console.log(f(1));

const f = (x) => {
    console.log(x);
};

f(21);

f();
console.log("After");
console.timeEnd("After");

console.log("Before");

setTimeout(() => {
    console.log("hi");
}, 3000);
console.log("after");