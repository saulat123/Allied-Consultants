let str =
    "the lhr is city of pakistan. The lhr is beautiful city. I live in lhr.";

var arr = str.split(" ");
for (var a = 0; a <= arr.length - 1; a++) {
    // var mat = arr.match(/lhr/gi);
    var index = arr.indexOf("lhr");
    // console.log(index);
    if (index > 0) arr.splice(index, 1, "khi");
    // arr[index] = "khi";
    // console.log(arr);
}

console.log(arr.join(" "));