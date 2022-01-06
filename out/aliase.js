function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var addition = combine(20, 30, 'as-number');
var additionstring = combine('20', '30', 'as-number');
var concatination = combine("Ashutosh", "Chaturvedi", 'as-string');
console.log(addition);
console.log(additionstring);
console.log(concatination);
//# sourceMappingURL=aliase.js.map