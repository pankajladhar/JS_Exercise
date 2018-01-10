/* 
    Using the JavaScript language, have the function ArrayAdditionI(arr) take the array
    of numbers stored in arr and return the string true if any combination of numbers  
    in the array can be added up to equal the largest number in the array, otherwise   
    return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the     
    output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty,
    will not contain all the same elements, and may contain negative numbers.   
*/

const ArrayAdditionI = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b);
    let largestNumber = sortedArray.pop();

    for (let i = 0; i < sortedArray.length; i++) {
        let total = 0
        for (let j = i; j < sortedArray.length; j++) {
            total = total + sortedArray[j]
        }
        if (total === largestNumber) return true
    }
    return false
}

console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3])) // false
console.log(ArrayAdditionI([4, 2, 6])) // trur
console.log(ArrayAdditionI([4, 1, 2])) // false