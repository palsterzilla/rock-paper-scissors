function getComputerChoice() {
  const gameChoice = ["rock", "paper", "scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
  
  console.log(`computer pick: ${randomChoice}`);
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
 
function game() {
  let playerWinCount = 0;
  
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Pick one of the following; rock, paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  
    // TODO: implement player win count
    // if (playRound(playerSelection, computerSelection) == /You Win!*/) {
    //   playerWinCount++;
    //   console.log("menang coy")
    // }
  }

  // console.log(playerWinCount);
}

game();