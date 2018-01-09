/*
    Using the JavaScript language, have the function CheckNums(num1,num2) 
    take both parameters being passed and 
    return the string true if num2 is greater than num1, 
    otherwise return the string false. 
    If the parameter values are equal to each other then return the string -1. 
*/

const CheckNums = (num1,num2) =>{
    return num1 === num2 ? -1 : (num1 > num2 ? true : false)
}

console.log(CheckNums(2,2)); // -1
console.log(CheckNums(3,2)); // true
console.log(CheckNums(1,2)); // false