// // flatten array value.
// let arr = [[23,34],[20,28],[78,87]]
// let xyz = []
// flatten(arr)
// function flatten(arrayValue) {
//     for(let x of arrayValue){
//         for(let y of x){
//             xyz.push(y)
//         }
//     }

//     console.log(xyz)
// }

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));