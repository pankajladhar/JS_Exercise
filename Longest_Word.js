/*
    return the largest word in the string. 
    If there are two or more words that are the same length, 
    return the first word from the string with that length.
*/

let LongestWord =  (sen)  => {
    var wordsArray = sen.match(/[a-z0-9]+/gi) //sen.split(" ");
    let storeValue = 0;
    let storeIndex = 0
    for (var i = 0; i < wordsArray.length - 1; i++) {
        if (wordsArray[i].length > storeValue) {
            storeValue = wordsArray[i].length;
            storeIndex = i
        }
    }

    return wordsArray[storeIndex];
}

let LongestWord_Sort = (sen) => {
    var arr = sen.match(/[a-z0-9]+/gi);
    var sorted = arr.sort(function (a, b) {
        return b.length - a.length;
    });

    return sorted[0];
}

console.log("LongestWord", LongestWord("coderbyt1 $$$longest# word is coderbyte"));
console.log("LongestWord_Sort", LongestWord_Sort("zxcv qwer asdf qwe asdf zxcv"));


