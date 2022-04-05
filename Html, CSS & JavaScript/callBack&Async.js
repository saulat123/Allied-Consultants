// function getData(cb) {
//     setTimeout(() => {
//         console.log("Get data");
//         cb();
//     }, 3000);
// }

// function dispData() {
//     setTimeout(() => console.log("Display Data"), 1000);
// }

// getData(dispData);

// function getData(cb) {
//     console.log("Start");
//     setTimeout((cb) => console.log("3 Sec"), 3000);
//     setTimeout((cb) => console.log("6 Sec"), 6000);
//     setTimeout((cb) => console.log("9 Sec"), 9000);
//     setTimeout((cb) => console.log("12 Sec"), 12000);

//     cb();
// }

// function dispData() {
//     setTimeout(() => {
//         console.log("15sec");
//         console.log("Bread");
//         console.log("End");
//     }, 15000);
// }

// getData(dispData);

// function disData() {
//     for (var t = 3; t < 16; t += 3) {
//         setTimeout(() => {
//             console.log(t + "sec");
//         }, t * 1000);
//     }
// }

// disData();

console.log("Start");

function myfunc(t) {
    setTimeout(() => {
        console.log(`${t / 1000} seconds`);
    }, t);
    if (t < 15000) return myfunc(t + 3000);
}
var t;
myfunc(3000);
console.log("End");