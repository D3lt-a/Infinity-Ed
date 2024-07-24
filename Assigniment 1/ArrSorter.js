let arr = [5,8,2,0,6,1,4,7,9,3]

function SortArr(arr){
    return arr.sort((a,b) => a-b);
}

let sortedArr = SortArr(arr)
console.log(sortedArr)