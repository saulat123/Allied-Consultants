// var a = 10;

// function foo() {
//     var x = 1;
//     return () => {
//         x++;
//         a++;
//         console.log(x);
//         console.log(a);
//     };
// }

// const f = foo();
// f();
// f();

// function add(x) {
//     return (y) => x + y;
// }

// // const add5 = add(5);
// // console.log(add5(3))
// console.log(add(5)(2));

// for (let i = 1; i <= 4; i++) {
//     console.log(i);
//     setTimeout(() => {
//         //         console.log(i)
//         console.log(`after ${i} second(s): ${i}`);
//     }, i * 1000);
// }

const outerFunction = (a) => {
    let b = 5;
    const innerFunction = () => {
        add5 = a + b;
        console.log(add5);
    };
    return innerFunction();
};

outerFunction(5);