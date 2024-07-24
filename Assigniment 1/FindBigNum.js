let arr = [1,2,3,40,5,6,7,8,9,0]

function FindBigNum(arr){
    return Math.max(...arr)
}

let BigNum = FindBigNum(arr)

console.log(BigNum)