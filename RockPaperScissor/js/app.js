// Visit a html page.
// See rock, paper & scissors clearly indicated on 3 separate buttons.
// Click on a button to choose rock, paper or scissors.
// See choice they made.
// See a random choice that an “AI” has made.
// See result of a win, a loss or a draw.
// Continue playing without refreshing the page.
// See the number of times they have won, lost or drawn with the “AI”.



let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorButton = document.getElementById("scissorButton");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let evaluation = document.getElementById("evaluation");
let playerScoreText = document.getElementById("playerScoreText");
let computerScoreText = document.getElementById("computerScoreText");


rockButton.addEventListener("click", clickButton);
paperButton.addEventListener("click", clickButton);
scissorButton.addEventListener("click", clickButton);
playerScore.addEventListener("click", clickButton);
computerScore.addEventListener("click", clickButton);
evaluation.addEventListener("click", clickButton);


let playerRoll = 0;
let computerRoll = 0;
let evaluationScore = 0;


function playerWins(){
  playerScore++;
  return "Player won!";
}

function computerWins(){
  computerScore++;
  return "Computer won!";
}

function draw(){
  playerSore === computerScore;
  return "It's a draw!;
}
document.querySelector(updateScore).innerText = playerScoreText;
document.querySelector(updateScore).innerText = computerScoreText;



function showPlayerScore (){
  playerScoreText.innerHTML = playerScore;
}

function computerScore (){
  computerScoreText.innerHTML = computerScore;
}

function updateScore(){
  playerScoreText.innerHTML = playerScore;
  computerScoreText.innerHTML = computerScore;
}
