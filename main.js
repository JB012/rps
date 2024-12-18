const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let text = document.createElement("p");
text.id = "toptext";
text.textContent = "Pick an option";
let humanChoice = "";

document.body.appendChild(text);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const result = choices[getRandomInt(3)];
    console.log(`Computer chooses: ${result}`);
    return result;
}

function playRounds() {
    text = document.querySelector("p");

    let wins = 0;
    let computerWins = 0;
    let round = 1;

    let computerChoice = getComputerChoice();

    const winningRules = {
        'paper': 'rock',
        'scissors' : 'paper',
        'rock' : 'scissors'
    };

    if (winningRules[humanChoice] === computerChoice) {
        text.textContent = `You wins round ${round}!`;
        wins += 1;
    }
    else {
        text.textContent = `Computer wins round ${round}`;
        computerWins += 1;
    }

  

computerWins > wins ? text.textContent = "Computer has won the game!" 
: text.textContent = "You win the game!";
}


rockButton.addEventListener("click", () => {
    text.textContent = "Chose rock";
    humanChoice = "rock";
    playRounds();
});

paperButton.addEventListener(() => {
    humanChoice = "paper";
    playRounds();
})

scissorsButton.addEventListener(() => {
    humanChoice = "scissors";
    playRounds();
})
