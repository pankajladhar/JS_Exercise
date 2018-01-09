/*
    Using the JavaScript language, have the function LetterChanges(str) 
    take the str parameter being passed and modify it using the following algorithm. 
    Replace every letter in the string with the letter following 
    it in the alphabet (ie. c becomes d, z becomes a). 
    Then capitalize every vowel in this new string (a, e, i, o, u) 
    and finally return this modified string.  
*/

 const SimpleAdding = (num) =>{ 
    let total = 0;
    while (num > -1){
        total = total + num;
        num --;
    }
    return total;      
  }
     
const SimpleAdding_Celver = (num) => {
    return(num * (num + 1))/2
}
console.log(SimpleAdding(4))   //10 
console.log(SimpleAdding_Celver(3))   //6
        
                  