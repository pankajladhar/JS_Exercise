/* 
    Using the JavaScript language, have the function NumberSearch(str) take the str
    parameter, search for all the numbers in the string, add them together, then
    return that final number. For example: if str is "88Hello 3World!" the output
    should be 91. You will have to differentiate between single digit numbers and
    multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"
    should return two different answers. Each string will contain at least one letter
    or symbol.  
*/

const NumberSearch = (str) => {
    let total = 0;

    str = str.replace(/[^0-9\.]+/g, " ").split(" ");
    for (let i = 0; i < str.length; i++) {
        total += Number(str[i]);
    }
    return total;
}
const NumberSearch1 = (str) => {
    return str.split(" ").reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur)
    })
}

console.log(NumberSearch("88Hello 3World!")) // 91
console.log(NumberSearch1("88Hello 3World!")) // 91

console.log(NumberSearch("55Hello")) // 55
console.log(NumberSearch("5Hello 5")) // 55