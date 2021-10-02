let playerScore = "";
let computerScore = "";
let computer_score1 = "";
let computer_score2 = "";
let scores = {};
let scoreComputers = {};
const player_score_span = document.getElementById("player_score");
const computer_score_span = document.getElementById("computer_score");
const score_div = document.querySelector("score");
const result_p = document.querySelector(".result > p");
const resultComp_p = document.querySelector(".resultComp > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const choicesComp_div = document.getElementById("choicesComp");
const computers_play_but = document.getElementById("computers_play");
const restart_newGameP = document.getElementById("restart_newGameP");
const randomPlay_but = document.getElementById("randomPlay");
const reset_newGameC_but = document.getElementById("reset_newGameC");
const selectionCvC_div = document.getElementById("selectionCvC");
const home_div = document.getElementById("home");
const scoreComputers_div = document.getElementById("scoreComputers");
const computer_score1_span = document.getElementById("computer_score1");
const computer_score2_span = document.getElementById("computer_score2");

//reset score Computers
const resetScoresComp = () => {
  computer_score1 = 0;
  computer_score1_span.innerHTML = "Computer A: " + computer_score1;
  computer_score2 = 0;
  computer_score2_span.innerHTML = "Computer B: " + computer_score2;
  resultComp_p.innerHTML = "Play again!";
};

//reset score Player
const resetScores = () => {
  computerScore = 0;
  computer_score_span.innerHTML = "Computer: " + computerScore;
  playerScore = 0;
  player_score_span.innerHTML = "Player: " + playerScore;
  result_p.innerHTML = "Play again!";
};

//go back to homepage
restart.addEventListener("click", () => {
  home_div.style.display = "flex";
  selectionCvC_div.style.display = "none";
});

computers_play.addEventListener("click", () => {
  home_div.style.display = "none";
  selectionCvC_div.style.display = "flex";
});

//random choices Computer
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//random choices Computers
function getChoicesComp() {
  const choicesComp = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choicesComp[randomNumber];
}

//Computer1 wins
function compWin(computer1Choice, computer2Choice) {
  computer_score1++;
  computer_score1_span.innerHTML = "Computer A: " + computer_score1;
  computer_score2_span.innerHTML = "Computer B: " + computer_score2;
  resultComp_p.innerHTML =
    computer1Choice + " beats " + computer2Choice + ". Computer A wins!";
}

// Player wins
function win(playerChoice, computerChoice) {
  playerScore++;
  player_score_span.innerHTML = "Player: " + playerScore;
  computer_score_span.innerHTML = "Computer: " + computerScore;
  result_p.innerHTML = playerChoice + " beats " + computerChoice + ". You win!";
}

//Computer1 loses
function compLose(computer1Choice, computer2Choice) {
  computer_score2++;
  computer_score1_span.innerHTML = "Computer A: " + computer_score1;
  computer_score2_span.innerHTML = "Computer B: " + computer_score2;
  resultComp_p.innerHTML =
    computer1Choice + " loses " + computer2Choice + ". Computer A lost!";
}

// Player loses
function lose(playerChoice, computerChoice) {
  computerScore++;
  player_score_span.innerHTML = "Player: " + playerScore;
  computer_score_span.innerHTML = "Computer: " + computerScore;
  result_p.innerHTML =
    playerChoice + " loses " + computerChoice + ". You lost!";
}

// Tie Computers
function drawComp(computer1Choice, computer2Choice) {
  resultComp_p.innerHTML =
    computer1Choice + " = " + computer2Choice + ". Draw!";
}

// Tie
function draw(playerChoice, computerChoice) {
  result_p.innerHTML = playerChoice + " = " + computerChoice + ". It's a tie!";
}

//Player vs Computer game's options
function game(playerChoice) {
  const computerChoice = getComputerChoice();
  switch (playerChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(playerChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "scissorRock":
      lose(playerChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(playerChoice, computerChoice);
      break;
  }
}

//Computer vs Computer game's options
function gameComp() {
  const computer2Choice = getChoicesComp();
  const computer1Choice = getChoicesComp();
  switch (computer1Choice + computer2Choice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      compWin(computer1Choice, computer2Choice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "scissorRock":
      compLose(computer1Choice, computer2Choice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      drawComp(computer1Choice, computer2Choice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });
  paper_div.addEventListener("click", function () {
    game("Paper");
  });
  scissors_div.addEventListener("click", function () {
    game("Scissors");
  });

  restart_newGameP.addEventListener("click", function () {
    resetScores();
  });

  reset_newGameC.addEventListener("click", function () {
    resetScoresComp();
  });

  randomPlay_but.addEventListener("click", function () {
    gameComp();
  });
}

main();
