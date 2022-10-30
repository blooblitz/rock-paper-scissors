
let playerScore = 0, computerScore = 0;
const scoreLimit = 5;
const btns = document.querySelectorAll('#gameBtns > button');
//btns.forEach(btn => btn.addEventListener('click', playRound));
btns.forEach(btn => btn.addEventListener('click', (e) => {
    playRound(e);
    playSound();
}));
const resultMessage = document.querySelector('#result');
const scoreDisplays = document.querySelector("#scoreWrapper");


function playSound () {
    const audio = document.querySelector("#soundKeyClick");
    audio.currentTime = 0.4;
    audio.play();
    console.log(audio);
}

/*
    Randomly assigns a choice to the computer
*/
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

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

/*
    Plays a round of "Rock-Paper-Scissors"
*/
function playRound(e) {
    if (playerScore >= scoreLimit || computerScore >= scoreLimit) {
        toggleModal();
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

    // Update Scoreboard
    scoreDisplays.firstElementChild.textContent = playerScore;
    scoreDisplays.lastElementChild.textContent = computerScore;

    if (playerScore === 5) announceWinner("Player");
    else if (computerScore ===5) announceWinner("Computer");
}

/*
    Toggles a modal announcing the game result, as well as presenting
    a button that resets the game.
*/
function announceWinner(winner){
    toggleModal();
}

/*
    Sets player and computer scores to 0.
*/
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultMessage.textContent = "Welcome to Rock Paper Scissors";
    scoreDisplays.firstElementChild.textContent = 0;
    scoreDisplays.lastElementChild.textContent = 0;
}

/* Modal code */
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const resetButton = document.querySelector(".reset-game-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
resetButton.addEventListener("click", () => {
    resetGame();
    toggleModal();
});

window.addEventListener("click", windowOnClick);


