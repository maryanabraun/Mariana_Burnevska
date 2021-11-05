let list = [32, "er", 78, "gdr", 67, 92, "hell", 43, "yerfv"];
console.log(list);
       
function filterList(arr){

    let intarr = [];
    for (let index = 0; index < arr.length; index++) {
        
        if (typeof arr[index] === 'number') {
            intarr.push(arr[index]);
           
        } 
    }
    return intarr;
};

console.log("Filtered list: \n", filterList(list));