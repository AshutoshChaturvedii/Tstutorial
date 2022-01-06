"use strict";
// let userInput: unknown;
// let username:string;
// userInput=5;
// userInput="ashutosh"
// if(typeof userInput=== 'string')
// {
// username=userInput;
// }
// console.log(username);
//***********************************************************Never*****************************************************************/
//This function returns never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error occoured!', 500);
