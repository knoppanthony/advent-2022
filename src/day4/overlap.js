// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

// Calling the readFiles function with file name
let arr = readFileLines('input.txt');
let inclusiveCount = 0;
let anyOverlapCount = 0;
for(const line of arr){
    let step1 = line.split("-");

    let leftSmall =  Number(step1[0]);
    let rightLarge = Number(step1[2]);

    let step2 = step1[1].split(",");

    let leftLarge = Number(step2[0]);
    let rightSmall = Number(step2[1]);

  // full overlap
   if (leftSmall <= rightSmall && leftLarge >= rightLarge){
    inclusiveCount += 1;
   } else if(rightSmall <= leftSmall && rightLarge >= leftLarge){
    inclusiveCount += 1;
   }

   //partial overlap - https://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap/325964#325964
   if (leftLarge >= rightSmall && rightLarge >= leftSmall){
    anyOverlapCount += 1;
   }
   
}

console.log(inclusiveCount);
console.log(anyOverlapCount);