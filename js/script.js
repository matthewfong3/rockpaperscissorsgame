"use strict"

// function that chooses for computer
const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3);

    switch(rand){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
};

// function that plays 1 round of R,P,S
// Lose = -1
// Tie = 0
// Win = 1
const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    let result;
        
    if(playerSelection === computerSelection) result = 0;
    else{
        switch(playerSelection){
            case "rock":
                if(computerSelection === "scissors") result = 1;
                else result = -1;
                break;
            case "paper":
                if(computerSelection === "rock") result = 1;
                else result = -1;
                break;
            case "scissors":
                if(computerSelection === "paper") result = 1;
                else result = -1;
                break;
            default:
                result = 0; // worst case - nothing happens - treat round as a Tie, just play another round
        }
    }
    
    return result;
};
 
// self executing function - waits for DOM to be ready, but not for all images to load
// ref: https://stackoverflow.com/questions/9899372/vanilla-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-whe
(() => {
    let playerScore = 0;
    let computerScore = 0;
    let selectionDiv = document.querySelector("#selectionContainer");
    let resultDiv = document.querySelector("#resultContainer");

    let playerChoiceEle = document.createElement('p');
    let computerChoiceEle = document.createElement('p');
    let descriptionEle = document.createElement('p');
    let scoreTrackerEle = document.createElement('p');
    let resultEle = document.createElement('h3');

    scoreTrackerEle.textContent = 'Player Score: ' + playerScore + ' | Computer Score: ' + computerScore;

    resultDiv.appendChild(playerChoiceEle);
    resultDiv.appendChild(computerChoiceEle);
    resultDiv.appendChild(descriptionEle);
    resultDiv.appendChild(scoreTrackerEle);
    resultDiv.appendChild(resultEle);

    selectionDiv.addEventListener('click', (e) => {
        const playerSelection = e.target.value;
        const computerSelection = getComputerChoice();

        playerChoiceEle.textContent = 'Player chose: ' + playerSelection;
        computerChoiceEle.textContent = 'Computer chose: ' + computerSelection;
    
        if(playRound(playerSelection, computerSelection) === 1){ // handle Win case
            playerScore++;
            descriptionEle.textContent = playerSelection + ' beats ' + computerSelection + '. You Win this Round!';
         }
        else if(playRound(playerSelection, computerSelection) === -1){ // handle Lose case
            computerScore++;
            descriptionEle.textContent = computerSelection + ' beats ' + playerSelection + '. You Lose this Round!';
        }
        else{ // handle Tie case
            descriptionEle.textContent = 'Round is Tie!';
        }

        scoreTrackerEle.textContent = 'Player Score: ' + playerScore + ' | Computer Score: ' + computerScore;

        if(playerScore === 5){
            resultEle.textContent = 'You Win Rock, Paper, Scissors Game - WINNER WINNER CHICKEN DINNER!';
            playerScore = 0;
            computerScore = 0;
        }
        else if(computerScore === 5){
            resultEle.textContent = 'You Lose Rock, Paper, Scissors Game - HOLD THIS L FOR ME BRUHHH! AHAHAHAHA';
            playerScore = 0;
            computerScore = 0;
        }
        else resultEle.textContent = '';
    });
})();