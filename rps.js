let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerSelection = "player"
let computerSelection = "computer"
let playerMove = document.getElementById('playerMove')
let computerMove = document.getElementById('computerMove')
let rockBtn = document.getElementById('rockBtn')
let paperBtn = document.getElementById('paperBtn')
let scissorsBtn = document.getElementById('scissorsBtn')
let numTurns = 5;
let turnsPlayed = 0;
let humanScore = 0;
let winnerMsg = document.getElementById('winnerMsg')
let playerScore = document.getElementById('playerScore')
let computerScore = 0;
let cpuScore = document.getElementById('cpuScore')
let ties = 0;
let tieCount = document.getElementById('tieCount')

function getComputerChoice() {
  // Create an array that lists all choices for the game
  choices = ["Rock!!", "Paper!!", "Scissors!!"];
  {
    /* Use Math.floor to round down the float that Math.random returns and 
    return an actual integer that will match the choices index of 0, 1, or 2 */
  }
   choice = choices[Math.floor(Math.random() * choices.length)];
   return choice
}

function getHumanChoice() {
  rockBtn.onclick = function() {
  playerSelection = rock
  console.log(playerSelection)
  playerMove.innerText = "Player chose Rock!!"
  let computerSelection = getComputerChoice()
  computerMove.innerText = "Computer chose " + computerSelection
  console.log(choice)
  playRound(playerSelection, computerSelection)
  }
  paperBtn.onclick = function() {
  playerSelection = paper
  console.log(playerSelection)
  playerMove.innerText = "Player chose Paper!!"
  let computerSelection = getComputerChoice()
  computerMove.innerText = "Computer chose " + computerSelection
  console.log(choice)
  playRound(playerSelection, computerSelection)
  }
  scissorsBtn.onclick = function() {
  playerSelection = scissors
  console.log(playerSelection)
  playerMove.innerText = "Player chose Scissors!!"
  let computerSelection = getComputerChoice()
  computerMove.innerText = "Computer chose " + computerSelection
  playRound(playerSelection, computerSelection)
  }
}


function playRound(humanChoice, computerChoice) { 
  // Create conditional statements for win conditions
  if (humanChoice === "rock" && computerChoice === "Scissors!!") {
      // Use ++ to increment score
    ++humanScore;
    // Log the condition message in the console
    winnerMsg.innerText = "Human wins! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "Rock!!") {
    ++humanScore;
    winnerMsg.innerText = "Human wins! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "Paper!!") {
    ++humanScore;
    winnerMsg.innerText = "Human wins! Scissors beat paper";
  } else if (computerChoice === "Paper!!" && humanChoice === "rock") {
    ++computerScore;
    winnerMsg.innerText = "Computer wins! Paper beats rock";
  } else if (computerChoice === "Scissors!!" && humanChoice === "paper") {
    ++computerScore;
    winnerMsg.innerText = "Computer wins! Scissors beats paper";
  } else if (computerChoice === "Rock!!" && humanChoice === "scissors") {
    ++computerScore;
    winnerMsg.innerText = "Computer wins! Rock beats scissors";
  } else {
    ++ties;
    winnerMsg.innerText = "Draw!"
  }

  // Log the updated score after each turn
  playerScore.innerText = "Player score: " + humanScore;
  cpuScore.innerText = "Computer score: " + computerScore;
  tieCount.innerText = "Number of ties: " + ties;
  
}

getHumanChoice()
getComputerChoice()
