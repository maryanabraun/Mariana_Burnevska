let str = "Monuments";
let str1 = "GeekForGeeks";

function first_non_repeating_letter(str){
  console.log(str);
  let lowerstr =  str.toLowerCase();
    for (let i = 0; i < lowerstr.length; i++) {
      let c = lowerstr.charAt(i);

      if (lowerstr.indexOf(c) === i & lowerstr.indexOf(c, i+1 )=== -1)
      {return "First non-repeating letter is '"+ str[i] + "'.";}
    }
    return null;
}

console.log(first_non_repeating_letter(str));
console.log(first_non_repeating_letter(str1));