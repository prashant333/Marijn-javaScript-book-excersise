// question 1: The sum of a range
function rangearray(a,b,c){
    var arr=[]
    if (b>a) {
        while (b>=a) {
            arr.push(a)
            a+=c
        }
    }
    else if (a>b) {
        while (a>=b) {
            arr.push(a)
            a-=c
        }
    } else {
        console.log("enter valid range")   
    }
    // sum(arr)    
    console.log(arr)
}
// function sum(array) {
//     var total=0
//     for (let index = 0; index < array.length; index++) {
//         total += array[index];   
//     }
//     console.log(total)
// }
rangearray(1,10,2)
