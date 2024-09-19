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

//Score
let playerScore = 0;
let aiScore = 0;

//Process
button0.addEventListener("click", function () {
  playerRoll = getRandomNumberOneToSix();
  showPlayerRollResult();

});

//Controller
function getRandomNumberOneToSix() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
  console.log(playerRoll);
}

//Views
function showPlayerRollResult(){
playerRollText.innerHTML = playerRoll;
}

function showAiRollResult(){
aiRollText.innerHTML = aiRoll;
}
