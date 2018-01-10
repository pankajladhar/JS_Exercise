/* 
    Using the JavaScript language, have the function ArithGeo(arr) take the array of  
    numbers stored in arr and return the string "Arithmetic" if the sequence follows  
    an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If 
    the sequence doesn't follow either pattern return -1. An arithmetic sequence is   
    one where the difference between each of the numbers is consistent, where as in a 
    geometric sequence, each term after the first is multiplied by some constant or   
    common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                      
    example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not
    be entered, and no array will contain all the same elements.    
*/

const ArithGeo_ES6_Methods = (params) => {
    let diff = params.slice(1)
        .map((n, i) => {
            return n - params[i];
        })
        .every((val, i, arr) => {
            return val === arr[0]
        });

    let multiple = params.slice(1)
        .map(function (n, i) { return n / params[i]; })
        .every((val, i, arr) => {
            return val === arr[0]
        });
        return diff ? "Arithmetic" : (multiple ? "Geometric" : -1)
}

const ArithGeo = (params)=>{
    let diff =  params[1] - params[0], arithFlag;
    let multiple = params[1] / params[0], geoFlag;
    for (let i = 2; i < params.length; i++) {
        arithFlag =  (params[i] - params[i-1]) !== diff ? false : true;
    }

    for (let i = 2; i < params.length; i++) {
        geoFlag =  (params[i] /params[i-1]) !== multiple ? false : true;
    }
    
    return arithFlag ? "Arithmetic" : (geoFlag ? "Geometric" : -1);
}

console.log(ArithGeo([2, 4, 6, 8])) // Arithmetic
console.log(ArithGeo([2, 6, 18, 54])) // Geometric
console.log(ArithGeo_ES6_Methods([2, 4, 6, 8])); // Arithmetic
console.log(ArithGeo_ES6_Methods([2, 5, 7, 9])); // -1

console.log(ArithGeo([2, 5, 7, 9])); // -1
console.log(ArithGeo([2, 5, 18, 54])); 
console.log(ArithGeo_ES6_Methods([2, 6, 18, 54])); // "Geometric"
console.log(ArithGeo_ES6_Methods([2, 5, 18, 54])); // true