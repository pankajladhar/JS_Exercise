/* 
Word Count Using the JavaScript language, have the function WordCount(str) take the str      
string parameter being passed and return the number of words the string contains  
(ie. "Never eat shredded wheat" would return 4). Words will be separated by single
spaces. 
*/

const WordCount = (str) =>{
    return str.split(" ").length
}

console.log(WordCount("Never eat shredded wheat")) // 4
console.log(WordCount("Pankaj Ladhar")) // 2

