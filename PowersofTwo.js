/*
    Using the JavaScript language, have the function PowersofTwo(num) take the num
    parameter being passed which will be an integer and return the string true if
    it's a power of two. If it's not return the string false. For example if the
    input is 16 then your program should return the string true but if the input is
    22 then the output should be the string false  
*/

const PowersofTwo = (num) => {
    let divis;
    let newNum;

    divis = num % 2;
    newNum = num / 2;
    while (divis === 0 && newNum !== 2) {
        divis = newNum % 2;
        newNum = newNum / 2;
    }

    if (newNum === 2) {
        return true;
    }
    else {
        return false;
    }
}

console.log(PowersofTwo(16)) //true
// console.log(PowersofTwo(22)) //false