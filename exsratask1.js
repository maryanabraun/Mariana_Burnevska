function findNextBiggerNum(digits)
{
    let number = [];
    for(let i = 0; i < digits.length; i++)
    number[i] = Number(digits[i]);
    let n = digits.length;

    for(var i = n - 1; i >= 0; i--)
    {
        if (number[i] > number[i - 1])
            break;
    }
      
     
    let x = number[i - 1];
    let smallest = i;
     
    for(let j = i + 1; j < n; j++)
    {
        if (number[j] > x && number[j] < number[smallest])
        smallest = j;
    }
     
    let temp = number[smallest];
    number[smallest] = number[i - 1];
    number[i - 1] = temp;
  
    x = 0;
     
    for(let j = 0; j < i; j++){
        x = x * 10 + number[j];
      }
    number = number.slice(i, number.length + 1);
    number.sort()
   
    for(let j = 0; j < n - i; j++){
        x = x * 10 + number[j];
    }
    console.log("Next number with set of digits is " + x);
}
 

let digits = "2017";      
findNextBiggerNum(digits);
 