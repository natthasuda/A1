//Variables
//Button
let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");

//Data
let playerRoll = 0;
let aiRoll = 0;

//Process
button0.addEventListener("click", function () {
  playerRoll = getRandomNumberOneToSix();

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
