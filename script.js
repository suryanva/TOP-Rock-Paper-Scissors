let userScore = 0;
let compScore = 0;

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
