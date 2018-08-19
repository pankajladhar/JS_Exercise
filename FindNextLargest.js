/*

isArraySorted
*/
const isArraySorted = (arr) =>{
    let isAsc, isDesc;
    isAsc = arr.every((elem, i, ar) => !i || (elem >= ar[i - 1]));
    // return isAsc ? "Ascending sorted" : "Not sorted"
    isDesc = arr.every((elem, i, ar) => !i || (elem <= ar[i - 1]));
    return isAsc ? "Ascending sorted" : (isDesc ? "Decending sorted" : "Not sorted")
}


const findNextGreaterNumber = (arr) => {
    let sortDirection = isArraySorted(arr);
    if(sortDirection === "Decending sorted"){
        return "Not Possible"
    }
    if(sortDirection === "Ascending sorted"){
        let results = []
        results = arr.slice(0, arr.length-2);
        results.push(arr.length);
        results.push(arr.length-1);
        return results;
    }
    else {
        return arr;
    }
}

// console.log(findNextGreaterNumber([1,2,3]))
// console.log(findNextGreaterNumber([3,2,1]))
console.log(findNextGreaterNumber([5,3,4,9,7,6]))