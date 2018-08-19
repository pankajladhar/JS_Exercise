/* KaprekarsConstant */
const KaprekarsConstant = (input) =>{
    let counter =  0;
    let expected = 6174;
    const x = function (num) {
        console.log(num)
        let asc = parseInt(num.toString().split('').sort((a,b)=> a - b).join(""))
        let desc = parseInt(num.toString().split('').sort((a,b)=> b - a).join(""))

        let diff = desc > asc ? desc - asc : asc - desc;
        counter ++
        return diff;
    }

    let output = x(input);

    while (output !== expected) {
        let oL = output.toString().length
        if( oL < 4){
            let zeros = 4 - oL;  // 1
            let formattedOutput = output;
            for(let i = 1; i <= zeros; i ++ ) {
                formattedOutput = '0'+ formattedOutput
            }
            console.log(formattedOutput)
            output = x(formattedOutput)
        } else {
            output = x(output)
        }
        
    }
    return counter;
};

console.log(KaprekarsConstant(2111)) //3
console.log(KaprekarsConstant(9831))