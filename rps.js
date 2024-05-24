function getComputerChoice() {
    // Create an array that lists all choices for the game
    choices = ["rock", "paper", "scissors"]
    {/* Use Math.floor to round down the float that Math.random returns and 
return an actual integer that will match the choices index of 0, 1, or 2 */}
    console.log(choices[(Math.floor(Math.random() * choices.length))])
}

getComputerChoice()

function getHumanChoice() {

}