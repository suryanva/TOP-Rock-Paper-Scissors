let userScore = 0;
let compScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const outcomeButton = document.getElementById("outcome");

rockButton.addEventListener("click", function () {
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  const displayUserScore = document.getElementById("user-score");
  displayUserScore.innerText = userScore;
  const displayComputerScore = document.getElementById("computer-score");
  displayComputerScore.innerText = compScore;
  checkWinner();
});

paperButton.addEventListener("click", function () {
  const playerSelection = "paper";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  const displayUserScore = document.getElementById("user-score");
  displayUserScore.innerText = userScore;
  const displayComputerScore = document.getElementById("computer-score");
  displayComputerScore.innerText = compScore;
  checkWinner();
});

scissorsButton.addEventListener("click", function () {
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  const displayUserScore = document.getElementById("user-score");
  displayUserScore.innerText = userScore;
  const displayComputerScore = document.getElementById("computer-score");
  displayComputerScore.innerText = compScore;
  checkWinner();
});

function computerPlay() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  const computerChoice = choiceArray[randomChoice];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection == computerSelection) {
    return "It's a tie";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    compScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    userScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    compScore++;
    return "You Lose! Scissors beats paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    userScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    compScore++;
    return "You Lose! Rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    userScore++;
    return "You Win! Scissors beats Paper";
  }
}
