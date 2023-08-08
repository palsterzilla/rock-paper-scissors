function getComputerChoice() {
  const gameChoice = ["rock", "paper", "scissors"];
  let randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
    
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {      
  if (playerSelection === computerSelection) {
    ++tieCount
    tieScore.textContent = tieCount;
    console.log("Tie!")

  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")) {

      ++computerWinCount
      computerScore.textContent = computerWinCount;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
      
    } else if (
      (computerSelection === "rock" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "rock")) {
        
        ++playerWinCount
        playerScore.textContent = playerWinCount;        
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
      
    }
    
  if (playerWinCount === 5) {
    alert("You Win! Congratulation!")
    gameReset()

  } else if (computerWinCount === 5) {
    alert("You Lose! Better luck next time!")
    gameReset()

  }
}
 
function gameReset() {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  tieScore.textContent = 0;

  playerWinCount = 0;
  computerWinCount = 0;
  tieCount = 0;
}

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

buttonRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
})

buttonPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
})

buttonScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
})