function getComputerChoice() {
  const gameChoice = ["rock", "paper", "scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
  
  // console.log(gameChoice[randomChoice]);/
  return randomChoice;
}
