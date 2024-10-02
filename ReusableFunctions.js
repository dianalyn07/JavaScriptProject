export function OddOREven (num){
    let result= num/2
    if (result % 1===0){
        return 'Even'
    }else {
        return 'Odd'
    }
}

export function ChkPrimeOrNot (num2){

    if (num2 < 2) {
        return 'NOT a Prime Number'
    } 

    for (let i=2; i<num2;i++){
        if(num2%i === 0){
            return 'NOT a Prime Number'
        }
    }
    return 'Is a Prime Number'
}