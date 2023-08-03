function getComputerChoice() {
  const gameChoice = ["rock", "paper", "scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
    
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const playerWin = `You Win! ${playerSelection} beats ${computerSelection}`;
  const playerLose = `You Lose! ${computerSelection} beats ${playerSelection}`;  

  if (playerSelection == computerSelection) {
    return "Draw"

  } else if (
      (playerSelection == "rock" && computerSelection == "paper") ||
      (playerSelection == "paper" && computerSelection == "scissors") ||
      (playerSelection == "scissors" && computerSelection == "rock")) {

        return playerLose

  } else if (
      (computerSelection == "rock" && playerSelection == "paper") ||
      (computerSelection == "paper" && playerSelection == "scissors") ||
      (computerSelection == "scissors" && playerSelection == "rock")) {
        
        return playerWin

  } else {
    return "Incorrect typing!"
  }

}
 
function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  
  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Pick one of the following; rock, paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
    
    if (/You Win/.test(`${playRound(playerSelection, computerSelection)}`)) {
      playerWinCount++;
    } else if (/You Lose/.test(`${playRound(playerSelection, computerSelection)}`)) {
      computerWinCount++;
    }
  }
  
  if (playerWinCount > computerWinCount ) {
    return console.log("Player Win!")
  } else if (playerWinCount < computerWinCount) {
    return console.log("Computer Win!")
  } else {
    return console.log("Draw!")
  }

}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game))