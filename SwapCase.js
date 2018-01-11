/* 
    Using the JavaScript language, have the function SwapCase(str) take the str        
    parameter and swap the case of each character. For example: if str is "Hello World"
    the output should be hELLO wORLD. Let numbers and symbols stay the way they are
*/

const SwapCase = (str) => {
    let result = '';

    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        var u = c.toUpperCase();

        result += u === c ? c.toLowerCase() : u;
    }

    return result;
}
console.log(SwapCase("Hello World")) // hELLO wORLD
console.log(SwapCase("hello world")) // HELLO WORLD