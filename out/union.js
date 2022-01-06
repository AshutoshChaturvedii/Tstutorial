function combine(input1, input2) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var addition = combine(20, 30);
var concatination = combine("Ashutosh", "Chaturvedi");
console.log(addition);
console.log(concatination);
//# sourceMappingURL=union.js.map