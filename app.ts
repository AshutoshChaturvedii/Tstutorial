
//Object

const person={
    name:'Ashutosh',
    Address:'Bangalore'
};
console.log(person);
//console.log(person.name)  is not supported

//Arrays

const Student={
    name:'Ashutosh',
    Address:'Bangalore',
    subjects:['M','P']
};

let hobbiestest:string[];
hobbiestest=['cricket', 'reading books','singing'];

let testing:any[];
testing=['hello',1,Student];

for(const sub of Student.subjects){
    console.log(sub.toUpperCase());
    console.log(sub.toLocaleLowerCase());
}

for(const hobby of hobbiestest )
{
    console.log(hobby);
}

