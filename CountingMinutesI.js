/* 
    Using the JavaScript language, have the function CountingMinutesI(str) take the   
    str parameter being passed which will be two times (each properly formatted with  
    a colon and am or pm) separated by a hyphen and return the total number of minutes
    between the two times. The time will be in a 12 hour clock format. For example:   
    if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am   
    the output should be 1320.
*/

const CountingMinutesI = (str) => {
    let arr = str.split("-");
    let a = arr[0].split(":00");
    let b = arr[1].split(":00");

    if(a[1] === b [1]) {
        return (parseInt(b) - parseInt(a)) * 60
    } else {
        return ((parseInt(b) - parseInt(a))+ 12 ) * 60
    }

}


console.log(CountingMinutesI("9:00am-10:00am"))
console.log(CountingMinutesI("1:00pm-11:00am"))