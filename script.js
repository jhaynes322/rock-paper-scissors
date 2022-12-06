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

const computerSelection = getComputerChoice();
//let playerSelection = "rock";
let userScore = parseInt(0);
let computerScore = parseInt(0);


function playRoundRock(computerSelection) {
    let result = "";
    if (computerSelection === "rock") {
        result = "It's a draw!";
    } else if (computerSelection === "scissors") {
        userScore++;
        result = "You win! Rock beats scissors";
    } else if (computerSelection === "paper") {
        computerScore++;
        result = "You lose. Paper beats rock.";
    }
    return result;
}

function logResults() {
    document.querySelector('#results').innerHTML = "test";
    document.querySelector('#userScore').innerHTML = "Your score = " + userScore;
    document.querySelector('#computerScore').innerHTML = "Computer's score = " + computerScore;
}

const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", playRoundRock);
rockBtn.addEventListener("click", logResults);

/*function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a draw!");
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

}*/





/*function testFunc() {
    document.querySelector('#results').innerHTML = "this is also a test";
}
*/
