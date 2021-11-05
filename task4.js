function pairsCount(arr, target)
{
    let count = 0; 
    let n = arr.length;
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] === target)
                count++;
 
    return count;
}
 
let arr = [ 1, 3, 6, 2, 2, 0, 4, 5];
let target = 5;


console.log("Count of pairs is " + pairsCount(arr, target));