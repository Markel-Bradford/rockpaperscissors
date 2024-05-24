function getComputerChoice() {
    // Create an array that lists all choices for the game
    choices = ["rock", "paper", "scissors"]
    {/* Use Math.floor to round down the float that Math.random returns and 
    return an actual integer that will match the choices index of 0, 1, or 2 */}
    return choices[(Math.floor(Math.random() * choices.length))]
}

console.log(getComputerChoice())

function getHumanChoice() {
    choice = prompt("Please enter rock, paper, or scissors: ")
    return choice
}

console.log(getHumanChoice())

humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();    
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)