/* 
    Using the JavaScript language, have the function TimeConvert(num) 
    take the num parameter being passed and return the number of 
    hours and minutes the parameter converts to 
    (ie. if num = 63 then the output should be 1:3). 
    Separate the number of hours and minutes with a colon. 
 */

 const TimeConvert = (num) =>{
    let hours = (num / 60).toFixed(0);
    // let hours = parseInt(num / 60);
    // let hours = Math.floor(num / 60);
    let mins = num % 60;
    return `${hours}:${mins} `
 }

 console.log(TimeConvert(126)); // 2:6
 console.log(TimeConvert(26)); // 0:26