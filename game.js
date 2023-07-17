function getComputerChoice() {
  const gameChoice = ["rock", "paper", "scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
  
  console.log(randomChoice);
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const playerWin = `You Win! ${playerSelection} beats ${computerSelection}`;
  const playerLose = `You Lose! ${computerSelection} beats ${playerSelection}`;
  
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return playerLose;
    } else if (computerSelection == "scissors") {
      return playerWin;
    } else {
      return "Draw";
    }
  } else if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        return playerLose;
      } else if (computerSelection == "paper") {
          return playerWin;
      } else {
        return "Draw";
      }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return playerLose;
    } else if (computerSelection == "rock") {
        return playerWin;
    } else {
      return "Draw";
    }
  }

}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));