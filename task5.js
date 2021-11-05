
function friendsList(list){
  let upperlist =  list.toUpperCase();
  console.log(upperlist);
  let newlist = upperlist.replace(/:/g, ", ");
  newlist = newlist.replace(/;/g, ") (");
  let arr = newlist.split(") (");
  
   for (let i = 0; i < arr.length; i++) {
    let subwords = arr[i].split(", ");
    let temp = subwords[0];
     subwords[0] = subwords[1];
     subwords[1] = temp;
    let word = "(" + subwords[0]+ ", " + subwords[1] + ")";
    arr[i] = word;
  }
  let finallist = [];
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
  
  finallist += arr[i];
   }
  console.log(finallist);
  return finallist;
}

let list = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
friendsList(list);