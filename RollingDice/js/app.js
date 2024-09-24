//Variables
//Button
let button0 = document.getElementById("button0");

//Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");


//Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;



//Process
button0.addEventListener("click", function () {
 getRandomNumberPlayer();
 getRandomNumberAi();
 showPlayerRollResult();
 showAiRollResult();
 updateScore();
 result();

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
    resultText.innerText = "Player won!";
  }
  else if (aiRoll > playerRoll){
    resultText.innerText = " Computer won!";

  }
  else {
    resultText.innerText = " It's a draw!";

  }
}

//Views
function showPlayerRollResult(){
playerRollText.innerHTML = "Player: " + playerRoll;
}

function showAiRollResult(){
aiRollText.innerHTML = "AI: " + aiRoll;
}

function updateScore(){
  playerScoreText.innerHTML = playerScore;
  aiScoreText.innerHTML = aiScore;
}
