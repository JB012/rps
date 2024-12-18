const prompt = require("prompt-sync")();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const result = choices[getRandomInt(3)];
    console.log(`Computer chooses: ${result}`);
    return result;
}

function getHumanChoice() {
    let humanChoice = prompt("Pick either rock, paper, or scissors: ");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    }

    getHumanChoice();
}

function playRounds() {
    console.clear();
    
    let wins = 0;
    let computerWins = 0;
    let round = 1;

    while (wins < 2 && computerWins < 2) {    
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        const winningRules = {
            'paper': 'rock',
            'scissors' : 'paper',
            'rock' : 'scissors'
        };

        if (winningRules[humanChoice] === computerChoice) {
            console.log(`You wins round ${round}!`);
            wins += 1;
        }
        else {
            console.log(`Computer wins round ${round}`);
            computerWins += 1;
        }

        round += 1;
    }

    computerWins > wins ? console.log("Computer has won the game!") 
    : console.log("You win the game!");
}


playRounds();