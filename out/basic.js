function add(n1, n2, printresult, phrase) {
    var result = n1 + n2;
    if (printresult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 5;
var showresult = true;
var resultPhrase = "Result is";
add(number1, number2, showresult, resultPhrase);
//# sourceMappingURL=basic.js.map