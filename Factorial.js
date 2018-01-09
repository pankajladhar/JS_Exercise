/*
    Using the JavaScript language, have the function Factorial(num) 
    take the num parameter being passed and return the factorial of it 
    (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, 
    the range will be between 1 and 18 and the input will always be an integer. 
 */


const Factorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    return factorial
}

const FactorialRecursive = (num) => {
    const factorial = (n) => {
        if (n === 0) { return 1; }
        else { return factorial(n - 1) * n; } // 5 * 4
    }

    return factorial(num);
}

// keep this function call here 
console.log(Factorial(4))
console.log(FactorialRecursive(5))    