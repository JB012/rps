const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let playerScore = document.querySelector("#score");
let computerScore = document.querySelector("#c-score");
let container = document.createElement("div");
document.body.appendChild(container);

let humanChoice = "";
let wins = 0;
let computerWins = 0;

let text = document.createElement("div");
text.style.textAlign = "center";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const result = choices[getRandomInt(3)];
    return result;
}

function playRounds() {
    if (wins < 5 && computerWins < 5) {
        let computerChoice = getComputerChoice();

        const winningRules = {
            'paper': 'rock',
            'scissors' : 'paper',
            'rock' : 'scissors'
        };

        if (winningRules[humanChoice] === computerChoice) {
            wins += 1;
            playerScore.textContent = wins;
            text.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        }
        else if (winningRules[computerChoice] === humanChoice){
            computerWins += 1;
            computerScore.textContent = computerWins;
            text.textContent = `Computer has won! ${computerChoice} beats ${humanChoice}.`;
        }

        if (wins == 5) {
            text.textContent = "You won the game!";
        }
        else if (computerWins == 5) {
            text.textContent = "Computer has won the game!";
        }

        container.appendChild(text);
    }
}


rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    playRounds();
});

paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    playRounds();
})

scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    playRounds();
})
