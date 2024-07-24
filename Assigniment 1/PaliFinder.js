function isPali(str){
    return str === str.split("").reverse().join("")
}
 
let txt = prompt("Enter the word: ")
 
console.log(isPali(txt))