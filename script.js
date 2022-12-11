function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        ++computerScore;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "It's a tie. Go Again";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        ++userScore;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        ++userScore;
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "Its a tie. Go again";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        ++computerScore;
        return "You Lose. Scissors beat Paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        ++computerScore;
        return "You Lose. Rock beats Scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        ++userScore;
        return "You Win! Scissor beat Paper";
    } else {
        return "Its a tie. Go Again";
    }
}


let userScore = parseInt(0);
let computerScore = parseInt(0);

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick a move");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log("your score = " + userScore);
        console.log("Computer's score = " + computerScore);
    }
}
