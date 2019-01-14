// // question 1: The sum of a range
// function rangearray(a,b,c){
//     var arr=[]
//     if (b>a) {
//         while (b>=a) {
//             arr.push(a)
//             a+=c
//         }
//     }
//     else if (a>b) {
//         while (a>=b) {
//             arr.push(a)
//             a-=c
//         }
//     } else {
//         console.log("enter valid range")   
//     }
//     sum(arr)    
//     console.log(arr)
// }
// function sum(array) {
//     var total=0
//     for (let index = 0; index < array.length; index++) {
//         total += array[index];   
//     }
//     console.log(total)
// }
// rangearray(1,10,2)

// question 2: function to reverse an array
// function reverseArray(arr) {
//     let c = Math.floor((arr.length)/2)
//     let i=0
//     let ary=[]
//     while (i<c) {
//         ary.push(arr.shift())
//         i++
//     }
//     let count =0
//     while (count<c) { 
//         arr.unshift(arr.splice(1,2))
//         count++
//     }
//     console.log(ary)
//     console.log(arr)
// }
// reverseArray([1,2,3,4,5])

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    console.log(ret)
}

var a = [3,5,7,8]
var b = reverseArr(a);