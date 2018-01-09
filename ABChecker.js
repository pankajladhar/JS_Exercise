/* 
    Using the JavaScript language, have the function ABCheck(str) 
    take the str parameter being passed and r
    eturn the string true if the characters a and b are separated by exactly 3 places 
    anywhere in the string at least once 
    (ie. "lane borrowed" would result in true 
    because there is exactly three characters between a and b). 
    Otherwise return the string false.
*/

const ABCheck = (str) =>{
    const getMatchedPosition = (regex) =>{
        let indexes =[], m;
        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            indexes.push(m.index)
        }
        return indexes;
    }

    let aMatchedIndex = getMatchedPosition(/a/g);
    let bMatchedIndex = getMatchedPosition(/b/g);
    let counter = 0; 
    for(let i = 0; i < aMatchedIndex.length; i++ ){
        for(let j = 0; j < bMatchedIndex.length; j++ ){
            counter = aMatchedIndex[i] + 4 === bMatchedIndex[j] ? ++ counter : counter
        }
    }
    return  counter > 0 ? true : false;
}

function ABCheck_Regex(str) { 

    var match = str.search(/a...b/);
    if (match > -1) {
      return "true";
    }
    else {
      return "false";
    }
           
  }

console.log(ABCheck("lane borrowed"))
console.log(ABCheck_Regex("lane borrowed"))