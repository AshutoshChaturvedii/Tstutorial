//Object
var person = {
    name: 'Ashutosh',
    Address: 'Bangalore'
};
console.log(person);
//console.log(person.name)  is not supported
//Arrays
var Student = {
    name: 'Ashutosh',
    Address: 'Bangalore',
    subjects: ['M', 'P']
};
var hobbiestest;
hobbiestest = ['cricket', 'reading books', 'singing'];
var testing;
testing = ['hello', 1, Student];
for (var _i = 0, _a = Student.subjects; _i < _a.length; _i++) {
    var sub = _a[_i];
    console.log(sub.toUpperCase());
    console.log(sub.toLocaleLowerCase());
}
for (var _b = 0, hobbiestest_1 = hobbiestest; _b < hobbiestest_1.length; _b++) {
    var hobby = hobbiestest_1[_b];
    console.log(hobby);
}
//# sourceMappingURL=app.js.map