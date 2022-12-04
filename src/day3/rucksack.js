
// Importing the fs module
let fs = require("fs");
const { get } = require("http");
const { markAsUntransferable } = require("worker_threads");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

function match(s1, s2) {
    let foundChar = '';
    
    for(let i in s1) {
        s2.includes(s1[i]) ? foundChar =  s1[i] : false;
    }


    return foundChar;
}

const charMap = new Map();

charMap.set('a', 1);
charMap.set('b', 2);
charMap.set('c', 3);
charMap.set('d', 4);
charMap.set('e', 5);
charMap.set('f', 6);
charMap.set('g', 7);
charMap.set('h', 8);
charMap.set('i', 9);
charMap.set('j', 10);
charMap.set('k', 11);
charMap.set('l', 12);
charMap.set('m', 13);
charMap.set('n', 14);
charMap.set('o', 15);
charMap.set('p', 16);
charMap.set('q', 17);
charMap.set('r', 18);
charMap.set('s', 19);
charMap.set('t', 20);
charMap.set('u', 21);
charMap.set('v', 22);
charMap.set('w', 23);
charMap.set('x', 24);
charMap.set('y', 25);
charMap.set('z', 26);
charMap.set('A', 27);
charMap.set('B', 28);
charMap.set('C', 29);
charMap.set('D', 30);
charMap.set('E', 31);
charMap.set('F', 32);
charMap.set('G', 33);
charMap.set('H', 34);
charMap.set('I', 35);
charMap.set('J', 36);
charMap.set('K', 37);
charMap.set('L', 38);
charMap.set('M', 39);
charMap.set('N', 40);
charMap.set('O', 41);
charMap.set('P', 42);
charMap.set('Q', 43);
charMap.set('R', 44);
charMap.set('S', 45);
charMap.set('T', 46);
charMap.set('U', 47);
charMap.set('V', 48);
charMap.set('W', 49);
charMap.set('X', 50);
charMap.set('Y', 51);
charMap.set('Z', 52);



// Calling the readFiles function with file name
let arr = readFileLines('input.txt');
let charSum = 0;
for(const content of arr){

    let first =  content.slice(0,(content.length/2) );
    let second = content.slice(content.length/2,content.length+1);
    let matchChar = match(first,second);
    charSum += charMap.get(matchChar);
    console.log(charSum)
 

}

//pt2
let resCount = 1;
charSum = 0;
let topindex =2;
for(var i=0;i< arr.length; i+=3){

    for(const letter of arr[i]){
        if (arr[i+2].includes(letter) && arr[i+1].includes(letter)){
            charSum += charMap.get(letter);  
            break;
        }
    }
}

console.log(charSum);

