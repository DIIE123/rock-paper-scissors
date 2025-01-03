let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch(choice) {
        case 1:
            return "rock";

        case 2:
            return "scissors";
        
        case 3:
            return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors: ");
    return choice;
}

function capitalize(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice != "") {
        humanChoice = capitalize(humanChoice);
        computerChoice = capitalize(computerChoice);
    }
    
    if (humanChoice != "Rock" && humanChoice != "Scissors" && humanChoice != "Paper") {
        console.log("Invalid Input!");
    }
    else {
        console.log(`You played ${humanChoice}.`);
        console.log(`The computer played ${computerChoice}.`);

        if (humanChoice == computerChoice) {
            console.log(`Draw! You both played ${humanChoice}.`);
        }
        else if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Rock") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        }
        else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    } 
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}!`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();