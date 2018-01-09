/*
    Using the JavaScript language, have the function LetterCapitalize(str) t
    ake the str parameter being passed and capitalize the first letter of each word.
     Words will be separated by only one space. 
 */


const  LetterCapitalize = (str) => { 
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
           
  }

  const LetterCapitalize_Regex = (str) =>{
      /* \b defines word boundry */
      return str.replace(/\b[a-z]/gi, function(char) { 
          console.log(char)
          return char.toUpperCase();
        });
    }
    
console.log(LetterCapitalize("hello world from coderbyte"))
console.log(LetterCapitalize_Regex("hello world"));