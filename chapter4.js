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
    sum(arr)    
    console.log(arr)
}
function sum(array) {
    var total=0
    for (let index = 0; index < array.length; index++) {
        total += array[index];   
    }
    console.log(total)
}
rangearray(1,10,2)

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

// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     console.log(ret)
// }

// var a = [3,5,7,8]
// var b = reverseArr(a);

//  A list

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20