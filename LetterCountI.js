/* 
    Have the function LetterCountI(str) take the str parameter being passed and return
    the first word with the greatest number of repeated letters. For example:         
    "Today, is the greatest day ever!" should return greatest because it has 2 e's    
    (and 2 t's) and it comes before ever which also has 2 e's. If there are no words  
    with repeating letters return <b>-1</b>. Words will be separated by spaces.
*/


function LetterCountI(str) {
    var ctObj, tempWord, maxWord, maxCt = 1;
    var arr = str.toLowerCase().replace(/[^a-zA-Z ]/g,"").split(" ");

    for(var i = 0; i < arr.length; i++){
        tempWord = arr[i];
        ctObj = {}

        for(var j = 0; j <tempWord.length; j++){
          ctObj[tempWord[j]] = ctObj[tempWord[j]] || 0;
          ctObj[tempWord[j]]++;
        }

        for (var key in ctObj) {
          if (ctObj.hasOwnProperty(key)) {
              if (ctObj[key] > maxCt) { 
                  maxCt = ctObj[key];
                  maxWord = tempWord;
              }
          }
        }
    }
      
    if (maxCt === 1) {
        return -1;
    } else {
        return maxWord;
    }
}

console.log(LetterCountI("Today, greatest is the a day ever!"));
