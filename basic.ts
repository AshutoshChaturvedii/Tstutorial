function add(n1:number,n2:number,printresult:boolean, phrase:string)
{ 
    const result= n1+n2;
if(printresult){
   console.log(phrase + result);
}
else{
    return result;
}}
const number1=5;
const number2=5;

const showresult= true;
const resultPhrase= "Result is";
add(number1,number2,showresult,resultPhrase);
