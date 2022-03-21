console.log();
console.log('-----start-----')
console.log();

let stringyMan = ""; 
var args = process.argv.slice(2);

let arr = args[0].split("\n");
let columns = parseInt(args[1]);
let newArr = [];

for (let i=0; i<arr.length; i++){
  let subArr = arr[i].split(" ");
  if (i === 0) {
    newArr.push(subArr)
  } else {
    newSub = [];
    const firstTerm = subArr.length - columns + 1;
    
    for (let k = subArr.length -1; k>firstTerm-1; k--){
      newSub.unshift(subArr[k]);
    }
    
    newSub.unshift(subArr.slice(0,firstTerm).join(" "));
    newArr.push(newSub);
  }
}

console.log();
console.log('-----result-----')
console.log();

for (let j=0; j<newArr.length; j++){
  console.log(newArr[j].join(", "));
}