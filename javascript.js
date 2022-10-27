game();

/* Main game function */
function game(){
    let playerSelection, computerSelection, roundResult, playerScore, computerScore;
    playerScore = 0, computerScore = 0;

    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    while (!playerSelection) {
        playerSelection = getPlayerChoice();
    }

    roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === 0) {
        computerScore += 1;
    }
    else if (roundResult === 1) {
        playerScore += 1;
    }

    printResult(playerScore, computerScore);
}

/* <summary>
        Prints game summary to console
    </summary>
    <returns>
        String announcing game result and the scores.
    </returns
*/
function printResult(playerScore, computerScore) {
    console.log("-- Game over! --");
    if (playerScore > computerScore) console.log("Player Wins!");
    else if (playerScore < computerScore) console.log("Computer Wins!");
    else console.log("Tie!");
    console.log("Player won " + playerScore + " rounds");
    console.log("Computer won " + computerScore + " rounds");
}

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
    playerSelection = playerSelection.trim().toLowerCase();
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
    An integer representing the round result. 0 indicates a lose, 1 indicates a win, and 2 indicates a tie.
    </returns
*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 2;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                console.log("You win! Rock beats Scissors.");
                return 1;
            }
            else {
                console.log("You lose! Paper beats Rock.");
                return 0;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("You win! Paper beats Rock.");
                return 1;
            }
            else {
                console.log("You lose! Scissors beats Paper.");
                return 0;
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                console.log("You win! Scissors beats Paper.");
                return 1;
            }
            else {
                console.log("You lose! Rock beats Scissors");
                return 0;
            }
            break;
        default:
            console.log("Uh oh, you shouldn't be here. There's been an error.")
            return null;
    }
}

