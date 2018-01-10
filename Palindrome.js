/* 
    Using the JavaScript language, have the function Palindrome(str) take the str      
    parameter being passed and return the string true if the parameter is a palindrome,
    (the string is the same forward as it is backward) otherwise return the string     
    false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers 
    will not be part of the string.  
*/

const Palindrome = (str) =>{
    let computedStr = str.split("").reverse().join('');
    return str === computedStr ? true : false 
}

const Palindrome_NoBuiltIn = (str) =>{
    let reverseString = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        reverseString = reverseString + str[i]
    }
    return str === reverseString ? true : false 
}

console.log(Palindrome("racecar")) // true
console.log(Palindrome("pankaj")) // false

console.log(Palindrome_NoBuiltIn("racecar")) // true
console.log(Palindrome_NoBuiltIn("pankaj")) // false