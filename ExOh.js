/* 
    Using the JavaScript language, have the function ExOh(str) take the str parameter   
    being passed and return the string true if there is an equal number of x's and o's, 
    otherwise return the string false. Only these two letters will be entered in the    
    string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    
    output should return false because there are 6 x's and 5 o's.                       
*/


const ExOh_FilterMethod = (str) => {
    if(str.length % 2 !== 0) return false;
    
    let countX = str.split('').filter((a)=> a === 'x').length;
    return countX === str.length/2 ? true : false
}


const ExOh_Regex = (str) => {
    if(str.length % 2 !== 0) return false;
    return str.match(/x/gi).length === str.match(/o/gi).length ? true : false
}

console.log(ExOh_Regex("xooxxxxooxo")); //false
console.log(ExOh_Regex("xooxxxxooxoo")); // true

console.log(ExOh_FilterMethod("xooxxxxooxo")); // false
console.log(ExOh_FilterMethod("xooxxxxooxoo")); // true