"use strict"

// function that chooses for computer
const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3);

    switch(rand){
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
};

// function that plays one round of rock, paper, scissors 
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    let result;
    
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock") result = "Tie!"
            else if(computerSelection === "paper") result = "You Lose!"
            else result = "You Win!";
            break;
        case "paper":
            if(computerSelection === "rock") result = "You Win!"
            else if(computerSelection === "paper") result = "Tie!"
            else result =  "You Lose!";
            break;
        case "scissors":
            if(computerSelection === "rock") result = "You Lose!"
            else if(computerSelection === "paper") result = "You Win!"
            else result = "Tie!";
            break;
        default:
            result = "invalid input";
    }

    return result;
};

// function that plays five rounds of rock, paper, scissors
const playGame = (numRounds) => {
    let playerScore = 0;
    let computerScore = 0;

    let result;

    while(numRounds > 0){
        const playerSelection = prompt("Please enter your choice");
        const computerSelection = getComputerChoice();

        if(playRound(playerSelection, computerSelection) === "You Win!"){
            console.log("You win this round");
            playerScore++;
        }
        else if(playRound(playerSelection, computerSelection) === "You Lose!"){
            console.log("You lose this round");
            computerScore++;
        }
        else console.log("Round is Tie!");

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

        numRounds--;
    }   

    if(playerScore > computerScore) result = "You Win the Game!";
    else if (playerScore < computerScore) result = "You Lose the Game!";
    else result = "Tie Game!";

    return result;
};

let playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => console.log(playGame(5)));