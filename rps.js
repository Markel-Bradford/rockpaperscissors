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
let computerScore = 0;
let ties = 0;

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
  computerMove.innerText = "Computer chose " + getComputerChoice()
  }
  paperBtn.onclick = function() {
  playerSelection = paper
  console.log(playerSelection)
  playerMove.innerText = "Player chose Paper!!"
  computerMove.innerText = "Computer chose " + getComputerChoice()
  }
  scissorsBtn.onclick = function() {
  playerSelection = scissors
  console.log(playerSelection)
  playerMove.innerText = "Player chose Scissors!!"
  computerMove.innerText = "Computer chose " + getComputerChoice()
  }
}

function playRound(humanChoice, computerChoice) { 
  // Create conditional statements for win conditions
  if (humanChoice === "rock" && computerChoice === "scissors") {
      // Use ++ to increment score
    ++humanScore;
    // Log the condition message in the console
    console.log("Human wins! Rock beats scissors");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    ++humanScore;
    console.log("Human wins! Paper beats rock");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    ++humanScore;
    console.log("Human wins! Scissors beat paper");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    ++computerScore;
    console.log("Computer wins! Paper beats rock");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    ++computerScore;
    console.log("Computer wins! Scissors beats paper");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    ++computerScore;
    console.log("Computer wins! Rock beats scissors");
  } else {
    ++ties;
    console.log("Draw! Play again");
  }

  // Log the updated score after each turn
  console.log("Player score: " + humanScore);
  console.log("Computer score: " + computerScore);
  console.log("Number of ties: " + ties);
  
}

console.log(playRound())
