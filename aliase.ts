type combinable= number|string;
type ConversionDescriptor= 'as-number'|'as-string';
function combine(input1:combinable,input2:combinable,resultConversion:ConversionDescriptor)
{ 
    let result;
    if(typeof input1=='number' && typeof input2 == 'number' || resultConversion === 'as-number'){
      result= +input1+ +input2;
    }
    else
    {
      result= input1.toString()+input2.toString();

    }

    return result;
    
}
const addition=combine(20,30,'as-number');
const additionstring=combine('20','30','as-number');
const concatination=combine("Ashutosh","Chaturvedi",'as-string');
console.log(addition);
console.log(additionstring);
console.log(concatination);