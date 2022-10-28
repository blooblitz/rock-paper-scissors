
let playerScore = 0, computerScore = 0;
const scoreLimit = 5;
const btns = document.querySelectorAll('#gameBtns > button');
btns.forEach(btn => btn.addEventListener('click', playRound));
const resultMessage = document.querySelector('#result');
const scoreMessage = document.querySelector('#score');
scoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;


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
/*
function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.trim().toLowerCase();
    // check for valid input
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log(playerSelection + " is not a valid choice. Please enter rock, paper, or scissors");
        return;
    }
    return playerSelection;
}*/

/* 
    Helper function to convert button id into a player
    choice.
*/
function getPlayerChoice(choice) {
    switch (choice) {
        case "btnRock":
            return "rock";
        case "btnPaper":
            return "paper";
        case "btnScissors":
            return "scissors";
        default:
            return "ERROR";
    }
}

/* <summary>
        Plays a round of "Rock-Paper-Scissors"
    </summary>
    <returns>
    An integer representing the round result. 0 indicates a lose, 1 indicates a win, and 2 indicates a tie.
    </returns
*/
//function playRound(playerSelection, computerSelection) {
function playRound(e) {
    if (playerScore >= scoreLimit || computerScore >= scoreLimit) {
        return;
    }
    
    let playerSelection = getPlayerChoice(e.target.id);
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        resultMessage.textContent = "It's a tie!";
        //console.log("It's a tie!");
        return;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                resultMessage.textContent = "You win! Rock beats Scissors.";
                //console.log("You win! Rock beats Scissors.");
                playerScore = ++playerScore;
            }
            else {
                resultMessage.textContent = "You lose! Paper beats Rock.";
                //console.log("You lose! Paper beats Rock.");
                computerScore = ++computerScore;
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                resultMessage.textContent = "You win! Paper beats Rock.";
                //console.log("You win! Paper beats Rock.");
                playerScore = ++playerScore;
            }
            else {
                resultMessage.textContent = "You lose! Scissors beats Paper.";
                //console.log("You lose! Scissors beats Paper.");
                computerScore = ++computerScore;
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                resultMessage.textContent = "You win! Scissors beats Paper.";
                //console.log("You win! Scissors beats Paper.");
                playerScore = ++playerScore;
            }
            else {
                resultMessage.textContent = "You lose! Rock beats Scissors";
                //console.log("You lose! Rock beats Scissors");
                computerScore = ++computerScore;
            }
            break;
        default:
            resultMessage.textContent = "Uh oh, you shouldn't be here. There's been an error.";
            //console.log("Uh oh, you shouldn't be here. There's been an error.")
    }
    if (playerScore === 5) announceWinner("Player");
    else if (computerScore ===5) announceWinner("Computer");

    scoreMessage.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function announceWinner(winner){
    alert("GAME OVER: " + winner + " wins!");
}

function addResetBtn(){

}

