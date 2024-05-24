function getComputerChoice() {
    // Create an array that lists all choices for the game
    choices = ["rock", "paper", "scissors"]
    {/* Use Math.floor to round down the float that Math.random returns and 
    return an actual integer that will match the choices index of 0, 1, or 2 */}
    return choices[(Math.floor(Math.random() * choices.length))]
}

function getHumanChoice() {
    choice = prompt("Please enter rock, paper, or scissors: ")
    choice = choice.toLowerCase();
    return choice
}


const humanSelection = getHumanChoice();    
const computerSelection = getComputerChoice();


function playGame() {
    let numTurns = 5
    let turnsPlayed = 0
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore
            console.log("Human wins! Rock beats scissors")
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            ++humanScore
            console.log("Human wins! Paper beats rock")
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            ++humanScore
            console.log("Human wins! Scissors beat paper")
        } else if (computerChoice === "paper" && humanChoice === "rock"){
            ++computerScore
            console.log("Computer wins! Paper beats rock")
        } else if (computerChoice === "scissors" && humanChoice === "paper"){
            ++computerScore
            console.log("Computer wins! Scissors beats paper")
        } else if (computerChoice === "rock" && humanChoice === "scissors"){
            ++computerScore
            console.log("Computer wins! Rock beats scissors")
        } else {
            console.log("Draw! Play again");
        };
        console.log("Player score: " + humanScore)
        console.log("Computer score: " + computerScore)
    }

    while (turnsPlayed < numTurns) {
        ++turnsPlayed
        playRound(getHumanChoice(), getComputerChoice())
        console.log("Turns played: " + turnsPlayed)
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You defeated the computer!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Try your luck again?")
    } else {
        console.log("You tied! Play again?")
    }

    playRound()

}

playGame()