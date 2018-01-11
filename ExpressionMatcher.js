/* 
    ExpressionMatcher is take the str parameter being passed 
    and return "Expression Matched" or "Expression Not Matched"

    @param {string} str  
    @param {array} openExpArr  <optional> 
        default value ['[', '{', '(']
    @param {array} closeExpArr <optional> 
        default value [')', '}', ']']
    @returns 

*/

const ExpressionMatcher = (str, openExpArr, closeExpArr) => {
    const openingExp = openExpArr || ['[', '{', '('];
    const closingExp = closeExpArr || [')', '}', ']'];
    const inputExp = str.split('');
    const tempArr = [];
    let index = 0

    while (index < inputExp.length) {
        if (openingExp.indexOf(inputExp[index]) > -1) tempArr.push(inputExp[index])
        if (closingExp.indexOf(inputExp[index]) > -1) tempArr.pop()
        index++
    }

    return tempArr.length === 0 ? 'Expression Matched' : 'Expression Not Matched'

}

console.log(ExpressionMatcher("[{}]")) // Expression Matched
console.log(ExpressionMatcher("[{]")) // Expression Not Matched
console.log(ExpressionMatcher("$%", ['$'], ['%'])) // Expression Not Matched