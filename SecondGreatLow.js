/* 
    Using the JavaScript language, have the function SecondGreatLow(arr) take the array
    of numbers stored in arr and return the second lowest and second greatest numbers, 
    respectively, separated by a space. For example: if arr contains                   
    [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and    
    will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/


const SecondGreatLow = (input) => {
    let formattedArray = [];
    formattedArray = input.filter((elem, index, arr) => {
        return arr.indexOf(elem) == index
    }).sort((a, b) => {
        return a - b
    });

    if (formattedArray.length > 2) {
        return formattedArray[1]+" " + formattedArray[formattedArray.length-2];
    }
    else {
        return formattedArray[1]+" " + formattedArray[0];
    }


}

console.log(SecondGreatLow([7, 7, 12, 98, 106]))
console.log(SecondGreatLow([7, 12]))