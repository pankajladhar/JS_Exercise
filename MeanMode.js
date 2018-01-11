/* 
    Have the function MeanMode(arr) take the array of numbers stored in arr and    
    return 1 if the mode equals the mean, 0 if they don't equal each other         
    (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
    The array will not be empty, will only contain positive integers, and will not 
    contain more than one mode.  
*/

const MeanMode = (arr) => {
    let mean = arr.reduce((acc, cur)=>{
        return acc + cur
    }, 0) / arr.length

    let mode = arr.filter((elem, index)=>{
        return arr.indexOf(elem) != index
    }).length + 1;

    return mean === mode ? 1 : 0
    
}

console.log(MeanMode([5, 3, 3, 3, 1] )) // 1
console.log(MeanMode([3, 3, 3, 3, 1] )) // 0