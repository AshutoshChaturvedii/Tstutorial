function add(n1:number,n2:number):number //retunr type for TS typeinference
{

    return n1+n2;

}

///void return type in TS
function printResult(num:number)
{

    console.log('result is: ' +num);

}

printResult(add(5,10));


//here  we are specifying that combine values should accept a function that  takes 2 number parameters and returns a number

let combinevalues: (a:number,b:number)=>number;

combinevalues=add;
  console.log(combinevalues(8,8));


  ///function and callback

  function AddandHandleCallback(n1:number,n2:number,cb:(num:number)=>void)
  {

    const result= n1 + n2;
    cb(result);
  }

    AddandHandleCallback(8,9,(result)=>{

        console.log(result);
    })