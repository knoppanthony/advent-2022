// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

// Calling the readFiles function with file name
let arr = readFileLines('input.txt');

function findUniqueCharWindow(chars,windowSize){

    for ( var i=0; i < chars.length-windowSize; i++){
        var charSet = new Set();
        for (var j=0; j < windowSize;j++){
            //Duplicate, can break and move onto next window start
            if (charSet.has(chars[i+j]))
            {
                break;
            } else {
                charSet.add(chars[i+j]);
            }

            //no dupes, we found the window...return start index.
            if (j == windowSize-1)
            {
                return i+j+1;
            }
        }
    }
    console.log("dont print, shouldnt get here");
}

console.log(findUniqueCharWindow(arr[0],14));