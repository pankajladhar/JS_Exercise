/*
    Using the JavaScript language, have the function Reverse(str) 
    take the str parameter being passed and return the string in 
    reversed order. For example: if the input string is "Hello World and Coders" 
    then your program should return the string sredoC dna dlroW olleH. 
*/

const Reverse = (str) => {
    let reverString = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        reverString = reverString + str[i]
    }
    return reverString
}


const Reverse_builtIn = (str) =>{
    return str.split("").reverse().join("");
}

console.log(Reverse("Hello World and Coders")) // sredoC dna dlroW olleH
console.log(Reverse_builtIn("Hello World and Coders")) //sredoC dna dlroW olleH