"use strict";
function combine(input1, input2) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const addition = combine(20, 30);
const concatination = combine("Ashutosh", "Chaturvedi");
console.log(addition);
console.log(concatination);
