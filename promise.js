/************** using declaring variable  **************/
// var complete = true;
// const prom = new Promise(function(resolve, reject) {
//     if (complete) resolve("Successful");
//     else reject("Failed");
// });
// console.log(prom);

/************** using function  **************/
// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         if (complete) resolve("Successful");
//         else reject("Failed");
//     });
// }
// console.log(prom(false));

/************** then & catch  **************/
// function prom(complete) {
//     return new Promise(function(resolve, reject) {
//         console.log("Fetching Data, Please Wait....");
//         setTimeout(() => {
//             if (complete) resolve("Successful");
//             else reject("Failed");
//         }, 3000);
//     });
// }

// // let onResolve = (success) => {
// //     console.log(success);
// // };
// // let onReject = (error) => {
// //     console.log(error);
// // };

// prom(false)
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/************** Division using promise  **************/
// const prom = (a, b) => {
//     return new Promise((resolve, reject) => {
//         console.log("Fetching Data, Please Wait....");
//         var c = a / b;
//         setTimeout(() => {
//             if ((a, b)) resolve(`Answer is ${c}`);
//             else reject("Failed");
//         }, 3000);
//     });
// };

// prom(10, 20)
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/************** Declaring promise  **************/
// const p = new Promise(function(res, rej) {
//     var a = true;
//     if (a) console.log("Success");
//     else console.log("fail");
// });

// const p = new Promise((res, rej) => {
//     var a = true;
//     if (a) console.log("Success");
//     else console.log("fail");
// });

// function p(res, rej) {
//     var a = true;
//     if (a) console.log("Success");
//     else console.log("fail");
// }

// p(true);

/************** If value is greater than 20  **************/
// const prom = new Promise((res, rej) => {
//     let value = 20;
//     if (value > 10) res(`value is ${value}`);
//     else rej("failed");
// });

// prom
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((error) => {
//         console.log(error);
//     });