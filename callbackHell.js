// function getData(cb) {
//     setTimeout(() => {
//         console.log("Get data");
//         setTimeout(() => {
//             console.log("Get Connection");
//             setTimeout(() => {
//                 console.log("Format Data");
//                 setTimeout(() => {
//                     console.log("Display Data");
//                 }, 3000);
//             }, 3000);
//         }, 3000);
//     }, 3000);
// }

// getData();

/************** Using object & set **************/
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

const call = (cb) => {
    setTimeout(() => {
        console.log(bioData.firstName);
        setTimeout(() => {
            console.log(bioData.lastName);
            setTimeout(() => {
                console.log(bioData.language);
                cb();
            }, 2000);
        }, 2000);
    }, 2000);
};

const call1 = () => {
    setTimeout(() => {
        console.log(bioData.fullName());
    }, 2000);
};

call(call1);