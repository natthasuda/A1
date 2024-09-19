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


//Process
button0.addEventListener("click", function () {
 getRandomNumberPlayer();
 getRandomNumberAi();
 showPlayerRollResult();
 showAiRollResult();

})

//Controller
function getRandomNumberPlayer() {
 playerRoll = Math.floor(Math.random() * 6) + 1

}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1

}

//Views
function showPlayerRollResult(){
playerRollText.innerHTML = "Player: " + playerRoll;
}

function showAiRollResult(){
aiRollText.innerHTML = "AI: " + aiRoll;
}
