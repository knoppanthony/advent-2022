// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

// Calling the readFiles function with file name
let arr = readFileLines('input.txt');

let largestCalCount = 0;
let localCalCount = 0
let sumArr = [];
for(const calcount of arr){
    if (calcount == ''){
        //New elf comin up, see if this elf wins
        if (localCalCount > largestCalCount) {
            largestCalCount = localCalCount;
        }
        //push elf sum to array, will sort later
        sumArr.push(Number(localCalCount));
        localCalCount=  0;
    } else {
        localCalCount += Number(calcount);
    }
}

//print overall largest
console.log(largestCalCount);

//print sum array, sorted
sumArr.sort(function(a, b){return b - a})
console.log(sumArr);

//print sum of top 3
console.log(sumArr[0] + sumArr[1] + sumArr[2]);