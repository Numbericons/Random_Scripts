let stringyMan = ""; 
var args = process.argv.slice(2);
console.log(args);

let arr = args[0].split("\n");

for (let i=0; i<arr.length; i++){
  console.log(arr[i]);
}