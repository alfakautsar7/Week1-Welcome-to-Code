//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            x += 1;
        }
    }
    for (let j = 0; j < str.length; j++) {
        if (str[j] === "o") {
            o += 1;
        }
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
