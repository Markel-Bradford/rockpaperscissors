function getComputerChoice() {
    // Create an array that lists all choices for the game
    choices = ["rock", "paper", "scissors"]
    {/* Use Math.floor to round down the float that Math.random returns and 
    return an actual integer that will match the choices index of 0, 1, or 2 */}
    return choices[(Math.floor(Math.random() * choices.length))]
}

function getHumanChoice() {
    // Prompt the user to enter with rock, paper, or scissors
    choice = prompt("Please enter rock, paper, or scissors: ")
    // Remove case sensitivity by using toLowerCase()
    choice = choice.toLowerCase();
    return choice
}

// Assign the functions to global variables
const humanSelection = getHumanChoice();    
const computerSelection = getComputerChoice();

// Create playGame function to execute the entire program
function playGame() {
    // Define number of turns allowed, turns played, and score counts
    let numTurns = 5
    let turnsPlayed = 0
    let humanScore = 0
    let computerScore = 0
    let ties = 0

    // Create playRound to set round conditions for the game
    function playRound(humanChoice, computerChoice) {
        // Create conditional statements for win conditions
        if (humanChoice === "rock" && computerChoice === "scissors") {
            // Use ++ to increment score
            ++humanScore
            // Log the condition message in the console
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
            ++ties
            console.log("Draw! Play again");
        };
        // Log the updated score after each turn
        console.log("Player score: " + humanScore)
        console.log("Computer score: " + computerScore)
        console.log("Number of ties: " + ties)
    }
    
    
    // Create a while loop to specify how many times the game will run. Will loop as long as the number of turns played is less than 5
    while (turnsPlayed < numTurns) {
        // Increment turns played
        ++turnsPlayed
        // Request inputs from user again and receive new computer choice
        playRound(getHumanChoice(), getComputerChoice())
        //Log number of turns played
        console.log("Turns played: " + turnsPlayed)
    }

    
    
    // Create conditional message to declare the victor or if the game results in a tie
    if (humanScore > computerScore) {
        console.log("Congrats! You defeated the computer!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Try your luck again?")
    } else {
        console.log("You tied! Play again?")
    }

   

}

// Call the playGame function to execute the program
playGame()