/*********************** Task1 ***********************/

// const prom = new Promise((res, rej) => {
//     let val = true;
//     if (val) {
//         setTimeout(() => {
//             res("Get Connection");
//         }, 3000);
//     } else rej("Failed");
// });

// prom
//     .then((result) => {
//         console.log(result);
//         return "Get data";
//     })
//     .then((result) => {
//         console.log(result);
//         return "Format Data";
//     })
//     .then((result) => {
//         console.log(result);

//         return "Display Data";
//     })
//     .then((result) => {
//         console.log(result);
//         return new Promise((res, rej) => {
//             // var val = false;
//             setTimeout(() => {
//                 if (result) res("success");
//                 else rej("sorry");
//             }, 2000);
//         });
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/*********************** Task2 ***********************/

const bioData = {
    firstName: "Saulat",
    lastName: "Abbas",
    Age: 23,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    language: "Eng",
    set lang(value) {
        this.language = value;
    },
};

bioData.lang = "urdu";

const prom = new Promise((res, rej) => {
    var value = false;
    setTimeout(() => {
        if (value) res(bioData.firstName);
        else rej("Failed");
    }, 2000);
});

prom
    .then((result) => {
        console.log(result);
        return bioData.lastName;
    })
    .then((result) => {
        console.log(result);
        return bioData.language;
    })
    .then((result) => {
        console.log(result);
        return bioData.Age;
    })
    .then((result) => {
        console.log(result);
        return new Promise((res, rej) => {
            if (result) res(bioData.fullName());
            else rej("Sorry Failed");
        });
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });