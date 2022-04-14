var input = 1700;

// // if (input % 4 === 0 && input % 100 !== 0 && input % 400 !== 0) {
// //     console.log("Its a leap year");
// // } else console.log("Its not a Leap year");

var func = () => {
    if (input % 4 === 0) {
        if (input % 100 === 0) {
            if (input % 400 === 0) {
                return "Its leap year";
            } else return "Its not a leap year";
        } else return "Its a leap year";
    } else return "Its not leap year";
};

console.log(func());