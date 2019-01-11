// question 1 MINIMUM
function minimum(a,b){
    console.log("minimum of two number is:",Math.min(a,b))
}
minimum(4,3)

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

