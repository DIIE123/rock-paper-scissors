let humanScore = 0;
let computerScore = 0;

// Dom Manipulation
const playerButtons = document.querySelector("#playerButtons");
let cooldown = false;

playerButtons.addEventListener("click", (e) => {
    if (e.target != playerButtons) {
        if (cooldown) return;
        cooldown = true;

        const humanChoice = e.target.className;
        const computerChoice = getComputerChoice();

        const humanButton = e.target;
        const computerButton = document.querySelector("#computerButtons ." + computerChoice);

        animate(humanButton);
        setTimeout(() => animate(computerButton), 300);
        setTimeout(() => playRound(humanChoice, computerChoice), 800);
        setTimeout(() => {
            deanimate(humanButton);
            deanimate(computerButton);
        }, 1900);
        setTimeout(() => cooldown = false, 2000);
    }
});

// Game Logic
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    switch(choice) {
        case 1:
            return "rock";

        case 2:
            return "scissors";
        
        case 3:
            return "paper";
    }
}

function playRound(humanChoice, computerChoice) {
    const endText = document.querySelector("#endText");

    if (humanChoice == computerChoice) {
        endText.textContent = "Draw!";
        endText.style.color = "gold";
    }
    else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        endText.textContent = "You Win!";
        endText.style.color = "green";
        humanScore++;
    }
    else {
        endText.textContent = "You Lose!";
        endText.style.color = "red";
        computerScore++;
    }

    updateScore();
}

function updateScore() {
    const humanScoreDisplay = document.querySelector("#playerScore span");
    humanScoreDisplay.textContent = humanScore;

    const computerScoreDisplay = document.querySelector("#computerScore span");
    computerScoreDisplay.textContent = computerScore;
}

function animate(element) {
    element.classList.add("animate");
}

function deanimate(element) {
    element.classList.remove("animate");
}