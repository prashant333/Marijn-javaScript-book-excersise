// for(let v=1;v<=10;v++){
//     for(let p=0;p<v;p++){
//         console.log("#")
//     }
//     console.log('<br />')
// }

//Qn-1
for (var line = "#"; line.length < 7; line += "#")
    console.log(line);

// Qn-2
for(let i =1;i<=100;i++){
    if(i%3==0 && i%5==0)
      console.log("fizzBuzz")
    else if(i%3==0)
      console.log("fizz")
    else if(i%5==0 && (!(i%3==0)))
      console.log("buzz")
    else
      console.log(i)
}