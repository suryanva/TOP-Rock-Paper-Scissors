function computerPlay() {
  const choiceArray = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  const computerChoice = choiceArray[randomChoice];
  return computerChoice;
}
