// async function foo() {
//     console.log("a");
//     console.log("b");
//     await console.log("c");
//     console.log("d");
//     setTimeout(() => {
//         console.log("world");
//     }, 2000);
// }
// const prom = new Promise((res, rej) => {
//     var value = true;
//     if (value) res("g");
//     else rej("error");
// });
// foo();
// console.log("e");
// console.log("f");
// prom
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/********************** **********************/
function timeOut() {
    setTimeout(() => {
        console.log("TimeOut");
    }, 3000);
}

function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("GetData");
            res(true);
        }, 3000);
    });
}

function getConnection() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("GetConnection");
            res(true);
        }, 3000);
    });
}

async function foo() {
    console.log("B");
    // const user = await getData();
    // if (user) console.log("user found");
    // else console.log("user not found");

    const arr = await Promise.all([
        getConnection(),
        timeOut(),
        (user = await getData()),
    ]);
    if (user) console.log("user found");
    else console.log("user not found");
    // console.log(arr);
    console.log("c");
    console.log("d");
}

console.log("A");
foo();
console.log("E");
console.log("F");