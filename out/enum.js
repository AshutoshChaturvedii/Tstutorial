//Enum in TS is for automatically enumerated global constant identifiers
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Person = {
    name: 'Ashutsh',
    age: 28,
    hobbies: ['cricket', 'books'],
    role: Role.ADMIN
};
if (Person.role === ADMIN) {
    console.log('user is admin');
}
//# sourceMappingURL=enum.js.map