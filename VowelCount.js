/*
    Vowel Count                                                                       
    Using the JavaScript language, have the function VowelCount(str) take the str     
    string parameter being passed and return the number of vowels the string contains 
    (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this     
    challenge. 
 */

const VowelCount = (str) =>{
    const vowelArray = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    for (let i = 0; i < vowelArray.length; i++) {
        for (let j = 0; j < str.length; j++) {
            str[j].toLowerCase() == vowelArray[i] && ++ counter 
        }
    }
    return counter;
}

const VowelCount_Regex = (str) =>{
   return str.match(/a|e|i|o|u/gi) ? str.match(/a|e|i|o|u/gi).length : 0;
}

console.log(VowelCount("All cows eat grass"))
console.log(VowelCount("Bxt"))

console.log(VowelCount_Regex("All cows eat grass"))
console.log(VowelCount_Regex("Bxt"))