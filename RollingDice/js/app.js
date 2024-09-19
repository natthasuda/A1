//Variables
//Button
let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");


//Data
let playerRoll = 0;
let aiRoll = 0;
let resultRoll = " ";


//Process
button0.addEventListener("click", function () {
 getRandomNumberPlayer();
 getRandomNumberAi();
 showPlayerRollResult();
 showAiRollResult();
 showResultText();

})

//Controller
function getRandomNumberPlayer() {
 playerRoll = Math.floor(Math.random() * 6) + 1

}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1

}

function result(){
  if (playerRoll > aiRoll){
    return "Player Wins";
  }
  else if (aiRoll > playerRoll){
    return "AI Wins";
  }
  else {
   return "It's a draw";
  }
}

result = resultRoll;

console.log("Player Roll: " + playerRoll);
console.log("AI Roll: " + aiRoll);
console.log("Result: " + resultRoll);

//Views
function showPlayerRollResult(){
playerRollText.innerHTML = "Player: " + playerRoll;
}

function showAiRollResult(){
aiRollText.innerHTML = "AI: " + aiRoll;
}

function showResultText(){
  resultText.innerHTML = "Result: " + resultRoll;
}
