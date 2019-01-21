// question 1 MINIMUM
function min(a,b){
    if (a<b) return a 
    else return b
}
console.log(min(0,10))
console.log(min(0,-10))
//  question 2 RECURSION
function isEven(n) {
    if(n==0)
        console.log(`the number ${n} is even`)
    else if (n==1) {
        console.log(`the number ${n} is odd`)
    } else {
        isEven(n-2)
    }
    
}
isEven(-1)

