/*
let playerSelection, computerSelection;
computerSelection = getComputerChoice();
// continue to prompt for a selection until a valid choice is entered
while (!playerSelection) {
    playerSelection = getPlayerChoice();
}
playRound(playerSelection, computerSelection);
*/

/* <summary>
        Randomly assigns a choice to the computer
    </summary>
    <returns>
        'rock', 'paper', or 'scissors'
    </returns
*/
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

/* <summary>
        Gets the player choice.
    </summary>
    <returns>
        'rock', 'paper', or 'scissors', otherwise undefined if the user input is not valid.
    </returns
*/
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.trim().toLowerCase(); //strip whitespace and convert to lowercase
    // check for valid input
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log(playerSelection + " is not a valid choice. Please enter rock, paper, or scissors");
        return;
    }
    return playerSelection;
}

/* <summary>
        Plays a round of "Rock-Paper-Scissors"
    </summary>
    <returns>
    </returns
*/
function playRound(playerSelection, computerSelection) {
    //TIE!
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    //console.log(playerSelection + " " + computerSelection);
    //Player beats computer
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                return "You win! Rock beats Scissors.";
            }
            else {
                return "You lose! Paper beats Rock.";
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats Rock.";
            }
            else {
                return "You lose! Scissors beats Paper.";
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                return "You win! Scissors beats Paper.";
            }
            else {
                return "You lose! Rock beats Scissors";
            }
            break;
        default:
            console.log("Uh oh, you shouldn't be here. THere's been an error.")
            
    }
}