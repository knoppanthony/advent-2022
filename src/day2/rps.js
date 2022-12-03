
// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString()
   .split('\r\n');

// Calling the readFiles function with file name
let arr = readFileLines('input.txt');

const RPSResult = Object.freeze({
    Win: 0,
    Lose: 1,
    Draw: -1,
  });



function didPlayerWinRPS(ohand,phand){

    //DRAWS
    if (ohand == "A" && phand == "X"){
        return RPSResult.Draw
    }
    if (ohand == "B" && phand == "Y"){
        return RPSResult.Draw
    }
    if (ohand == "C" && phand == "Z"){
        return RPSResult.Draw
    }

    //WINS
    if (ohand == "C" && phand == "X"){
        return RPSResult.Win
    }
    if (ohand == "A" && phand == "Y"){
        return RPSResult.Win
    }
    if (ohand == "B" && phand == "Z"){
        return RPSResult.Win
    }

    //LOSSES
    if (ohand == "B" && phand == "X"){
        return RPSResult.Lose
    }
    if (ohand == "C" && phand == "Y"){
        return RPSResult.Lose
    }
    if (ohand == "A" && phand == "Z"){
        return RPSResult.Lose
    }

}

function determineHand(result,ohand){

    //draws
    if (ohand == "A" && result == RPSResult.Draw ){
        return "X";
    }
    if (ohand == "B" && result == RPSResult.Draw ){
        return "Y";
    }
    if (ohand == "C" && result == RPSResult.Draw ){
        return "Z";
    }

    //wins
    if (ohand == "A" && result == RPSResult.Win ){
        return "Y";
    }
    if (ohand == "B" && result == RPSResult.Win ){
        return "Z";
    }
    if (ohand == "C" && result == RPSResult.Win ){
        return "X";
    }

    //losses
    if (ohand == "A" && result == RPSResult.Lose ){
        return "Z";
    }
    if (ohand == "B" && result == RPSResult.Lose ){
        return "X";
    }
    if (ohand == "C" && result == RPSResult.Lose ){
        return "Y";
    }

}


function calcPlayerScore(hand){
    let score=0;
    if (hand == "X"){
        score = 1;
    }

    if (hand == "Y"){
        score = 2;
    }

    if (hand == "Z"){
        score = 3;
    }
    return score;
}


let matchArr = [];
let totalScore = 0;
for(const match of arr){

    matchArr = match.split(" ")
    let opponentThrow = matchArr[0];
    let playerThrow = matchArr[1];
    let newPlayerThrow = "";
    //part2 stipuates playerThrow actually means if you should lose,draw or win (xyz)...do some bullshit here to set playerThrow appropriately.
    if (playerThrow == "X"){
        newPlayerThrow = determineHand(RPSResult.Lose,opponentThrow);
    }
    if (playerThrow == "Y"){
        newPlayerThrow = determineHand(RPSResult.Draw,opponentThrow);
    }
    if (playerThrow == "Z"){
        newPlayerThrow = determineHand(RPSResult.Win,opponentThrow);
    }

    playerThrow = newPlayerThrow;

    let matchScore = calcPlayerScore(playerThrow);
    let matchResult = didPlayerWinRPS(opponentThrow,playerThrow);

    if (matchResult == RPSResult.Win){
        matchScore += 6;
    }

    if (matchResult == RPSResult.Lose){
        matchScore += 0;
    }

    if (matchResult == RPSResult.Draw){
        matchScore += 3;
    }

    console.log(matchScore);
    totalScore += matchScore;


}



console.log(totalScore);