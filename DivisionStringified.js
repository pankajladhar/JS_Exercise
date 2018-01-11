/*
    Using the JavaScript language, have the function DivisionStringified(num1,num2) 
    take both parameters being passed, divide num1 by num2, and return the result as
    a string with properly formatted commas. If an answer is only 3 digits long,    
    return the number with no commas (ie. 2 / 3 should output "1"). For example:    
    if num1 is 123456789 and num2 is 10000 the output should be "12,345".    
*/

const DivisionStringified_RegEx = (num1, num2) => {
    return (num1 / num2)
        .toFixed(0)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

}

const DivisionStringified = (num1, num2) => {
    let value = (num1 / num2).toFixed(0).toString();
    let formattedNumber = '', temp,
        n = value;
    while (n.length > 3) {
        temp = n.substring(n.length - 3);
        formattedNumber = ',' + temp + formattedNumber;
        n = n.slice(0, -3);
    }
    if (n) formattedNumber = n + formattedNumber;
    return formattedNumber;


    return value
}

console.log(DivisionStringified(123456789, 10000))
console.log(DivisionStringified_RegEx(123456789, 10000))