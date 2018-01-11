/* 
    Using the JavaScript language, have the function AdditivePersistence(num) take the
    num parameter being passed which will always be a positive integer and return its
    additive persistence which is the number of times you must add the digits in num
    until you reach a single digit. For example: if num is 2718 then your program
    should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/

const AdditivePersistence = (num) =>{
    
    let counter = 0;
    let numArray = num;
    const total = (arr) =>{
        return arr.reduce((acc, curr)=>{
            return parseInt(acc) + parseInt(curr)
        },0)
    }
    while (numArray.toString().length !==1) {
        numArray = total(numArray.toString().split(""));
        counter = counter + 1; 
    }
    return counter;
}

console.log(AdditivePersistence(2718)) // 2 
console.log(AdditivePersistence(270)) // 1