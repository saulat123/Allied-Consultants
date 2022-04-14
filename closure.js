var a = 10;

function foo() {
    var x = 1;
    return () => {
        x++;
        a++;
        console.log(x);
        console.log(a);
    };
}

const f = foo();
f();
f();

// function add(x) {
//     return (y) => x + y;
// }

// // const add5 = add(5);
// // console.log(add5(3))
// console.log(add(5)(2));