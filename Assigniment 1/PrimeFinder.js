function isPrimeNum(i){
    if (i <= 1) return false;
    if (i == 2 || i == 3) return true;
    if (i % 2 == 0 || i % 3 == 0) return false;
    
    for (let n = 5; n <= Math.sqrt(i); n += 6) {
        if (i % n == 0 || i % (n + 2) == 0) return false;
    } return true;
}

// let Inputnum = prompt("Enter Number: ")
// let num = parseInt(Inputnum, 10);

// isPrimeNum(num)? console.log(`${num} is a prime number`) : console.log(`${num} is not a prime number`)

function getPrimeNum(arr){
    return arr.filter(isPrimeNum)
}    

let Arr = [1,2,3,4,5,6,7,8,9,0];
let primeNum = getPrimeNum(Arr);

console.log(primeNum);