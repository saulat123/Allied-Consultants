/*********************** Error Handler ***********************/

const getConnection = () => {
    return new Promise((res, rej) => {
        var a = false;
        if (a) res("Connected");
        else rej("Connection Failed");
    });
};

const getData = () => {
    return new Promise((res, rej) => {
        var a = false;
        if (a) res("Get Data");
        else rej("Get Data Failed");
    });
};

async function result(cb) {
    var [result1, result2] = await errorHandler(cb);
    // var [result3, result4] = await errorHandler(getData());
    if (result1) console.log(result1);
    else console.log(result2);
}

const errorHandler = (p) =>
    p.then((result) => [result, undefined]).catch((err) => [undefined, err]);

result(getConnection());
result(getData());

/*********************** calculator ***********************/
// function calculate(a, b) {
//     ad = a + b;
//     subtract = a - b;
//     multiply = a * b;
//     Division = a / b;

//     return [ad, subtract, multiply, Division];
// }

// const [a, b, c, d] = calculate(5, 4);
// console.log(`Sum ${a}`);
// console.log(`Subtract ${b}`);
// console.log(`Multiply ${c}`);
// console.log(`division ${d}`);