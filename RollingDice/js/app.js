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
let drawResult = 0;

//Process
tryLoadGame();
updateScore();

button0.addEventListener("click", function () {
 getRandomNumberPlayer();
 getRandomNumberAi();
 evaluationResult();
 showPlayerRollResult();
 showAiRollResult();
 updateScore();
 saveAsCookie();


})

//Controller
function getRandomNumberPlayer() {
 playerRoll = Math.floor(Math.random() * 6) + 1
}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1
}

function evaluationResult() {
  if (playerRoll > aiRoll) {
    playerScore++;
    resultText.innerHTML = "The result is:  Player won!";
  } else if (aiRoll > playerRoll) {
    aiScore++;
    resultText.innerHTML = "The result is: Computer won!";

  } else {
    drawResult++;
    resultText.innerHTML = "The result is: It's a draw!";
  }
}

//Views
  function showPlayerRollResult() {
    playerRollText.innerHTML = "Player: " + playerRoll;
  }

  function showAiRollResult() {
    aiRollText.innerHTML = "AI: " + aiRoll;
  }

  function updateScore() {
    playerScoreText.innerHTML = playerScore;
    aiScoreText.innerHTML = aiScore;
  }

  // Cookie
function saveAsCookie(){
  // Game saved into 2 cookies
  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 3 Oct 2024 00:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + ";expires=Thu, 3 Oct 2024 00:00:00 UTC";
  console.log(" ");
}
function tryLoadGame(){
  // Game load from 2 cookies
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
