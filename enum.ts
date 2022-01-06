
//Enum in TS is for automatically enumerated global constant identifiers
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

   enum Role{ADMIN,READ_ONLY,AUTHOR};
    const Person = {
        name:'Ashutsh',
        age:28,
        hobbies:['cricket','books'],
        role: Role.ADMIN
    };




if(Person.role === ADMIN)
{

    console.log('user is admin');
}