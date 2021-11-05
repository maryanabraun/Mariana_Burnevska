function digitalRoot(number) {
    let sum = number;
    let arr = [];
    let reducer = (a,b) => parseInt(a) + parseInt(b);
 
    while (sum > 9) {
       arr = sum.toString().split("");
       console.log(arr, sum);
       sum = arr.reduce(reducer);
    }
 
    console.log("Digital sum = ", sum);
 }
 console.log(digitalRoot(7876890333323));