// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

// Calling the readFiles function with file name
let arr = readFileLines('input.txt');

//do some prep, shove 9 stacks into an array...trying to parse stacks line by line seems....dumb.
let stack1 = [];
stack1.push("S");
stack1.push("T");
stack1.push("H");
stack1.push("F");
stack1.push("W");
stack1.push("R");
let stack2 = [];
stack2.push("S");
stack2.push("G");
stack2.push("D");
stack2.push("Q");
stack2.push("W");
let stack3 = []
stack3.push("B");
stack3.push("T");
stack3.push("W");
let stack4 = [];
stack4.push("D");
stack4.push("R");
stack4.push("W");
stack4.push("T");
stack4.push("N");
stack4.push("Q");
stack4.push("Z");
stack4.push("J");
let stack5 = [];
stack5.push("F");
stack5.push("B");
stack5.push("H");
stack5.push("G");
stack5.push("L");
stack5.push("V");
stack5.push("T");
stack5.push("Z");
let stack6 = [];
stack6.push("L");
stack6.push("P");
stack6.push("T");
stack6.push("C");
stack6.push("V");
stack6.push("B");
stack6.push("S");
stack6.push("G");
let stack7 = [];
stack7.push("Z");
stack7.push("B");
stack7.push("R");
stack7.push("T");
stack7.push("W");
stack7.push("G");
stack7.push("P");
let stack8 = [];
stack8.push("N");
stack8.push("G");
stack8.push("M");
stack8.push("T");
stack8.push("C");
stack8.push("J");
stack8.push("R");
let stack9 = [];
stack9.push("L");
stack9.push("G");
stack9.push("B");
stack9.push("W");

let boxArr = [stack1,stack2,stack3,stack4,stack5,stack6,stack7,stack8,stack9]

for(const move of arr){
    //console.log(move);
    matches = move.match(/\d+/g);
   // console.log(matches);
    let numboxes = matches[0];
    let fromIndex = matches[1]-1;
    let toIndex = matches[2]-1;
    let tempStack = [];

    for ( var i=0; i < numboxes; i++){
        let box  = boxArr[fromIndex].pop();
        tempStack.push(box);
    }

    for ( var i=0; i < numboxes; i++){
        boxArr[toIndex].push( tempStack.pop());
    }


}

for(var i=0;i < 9;i++){
    console.log(boxArr[i].pop());
}
