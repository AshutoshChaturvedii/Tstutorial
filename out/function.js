function add(n1, n2) {
    return n1 + n2;
}
///void return type in TS
function printResult(num) {
    console.log('result is: ' + num);
}
printResult(add(5, 10));
//here  we are specifying that combine values should accept a function that  takes 2 number parameters and returns a number
var combinevalues;
combinevalues = add;
console.log(combinevalues(8, 8));
///function and callback
function AddandHandleCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
AddandHandleCallback(8, 9, function (result) {
    console.log(result);
});
//# sourceMappingURL=function.js.map