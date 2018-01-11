/*
    Using the JavaScript language, have the function DashInsert(str) insert dashes
    ('-') between each two odd numbers in str. For example: if str is 454793 the  
    output should be 4547-9-3. Don't count zero as an odd number. 
*/

const DashInsert = (str) => { 
    let idx = 0;
     while (idx < str.length-1) {
         if (Number(str[idx]) % 2 === 1 && Number(str[idx+1]) % 2 === 1) {
           str = str.slice(0,idx+1) + "-" + str.slice(idx+1);
           idx = idx + 2;
         }
         else {  
             idx++;
         }
   }
   return str;      
 }

console.log(DashInsert("1454793")) // 14547-9-3
console.log(DashInsert("11454793")) // 1-14547-9-3