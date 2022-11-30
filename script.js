function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
//const computerSelection = getComputerChoice();
//const playerSelection = prompt("Choose");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        userScore++;
        return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        userScore++;
        return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return ("You lose!Rock beats scissors");
    }

}

//let computerSelection = computerPlay();
//let playerSelection = prompt("Choose your weapon");
//console.log(computerSelection)
//console.log(playRound(playerSelection, computerSelection));

let userScore = parseInt(0);
let computerScore = parseInt(0);
//let playerSelection = prompt("Pick a move");
//let userScore = 0;
//let computerScore = 0;
function game() {
    //for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("Choose");
    let computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection))
    alert("your score = " + userScore);
    alert("Computer's score = " + computerScore);
}


const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', game());