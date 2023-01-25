
let playerScore = 0;
let playerScoreBox = document.querySelector('#playerScore');
let playerScoreDisplay = document.createElement('p');
playerScoreDisplay.textContent = `${playerScore}`;
playerScoreBox.appendChild(playerScoreDisplay);

let computerScore = 0;
let computerScoreBox = document.querySelector('#computerScore');
let computerScoreDisplay = document.createElement('p');
computerScoreDisplay.textContent = `${computerScore}`;
computerScoreBox.appendChild(computerScoreDisplay);

let finalResultBox = document.querySelector('#finalResult');
let displayMessage = document.createElement('p');
finalResultBox.appendChild(displayMessage);
let newGameButton = document.createElement('button');

//una funzione che restituisce carta sasso forbici per il computer
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomChoice === 1) {
        return "sasso"
    } else if (randomChoice === 2) {
        return "carta"
    } else {
        return "forbici"
    }
}

//funzione round che chiede all'utente di scegliere sasso carta forbici,
//e confronta con la scelta del computer

function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    switch(true) {
        case (playerSelection === "sasso" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "sasso"):
            displayMessage.textContent = 'Hai vinto';
            playerScore += 1;
            playerScoreDisplay.textContent = `${playerScore}`;
            playerScoreBox.removeChild(playerScoreDisplay);
            playerScoreBox.appendChild(playerScoreDisplay);
            return;
            break;
        
        case (playerSelection === "sasso" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "sasso"):
            displayMessage.textContent = 'Hai perso';
            computerScore += 1;
            computerScoreDisplay.textContent = `${computerScore}`;
            computerScoreBox.removeChild(computerScoreDisplay);
            computerScoreBox.appendChild(computerScoreDisplay);
            return;
            break;
        
        default:
           displayMessage.textContent = 'Pareggio';
    }

}

//una funzione gioco che chiama 5 volte la funzione round e tiene traccia del punteggio
//decretando il vincitore

function game(playerSelection) {
        playRound(playerSelection);

if (playerScore === 5) {

    displayMessage.textContent = 'HAI VINTO!';
    //finalResultBox.appendChild(displayMessage);

    newGameButton.textContent = 'Nuova partita';
    newGameButton.setAttribute('id', "newgamebutton");
    finalResultBox.appendChild(newGameButton);

    newGameButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        displayMessage.textContent = '';

        playerScoreDisplay.textContent = `${playerScore}`;
        playerScoreBox.removeChild(playerScoreDisplay);
        playerScoreBox.appendChild(playerScoreDisplay);

        computerScoreDisplay.textContent = `${computerScore}`;
        computerScoreBox.removeChild(computerScoreDisplay);
        computerScoreBox.appendChild(computerScoreDisplay);

        //finalResultBox.removeChild(displayMessage);
        finalResultBox.removeChild(newGameButton);
    });

    return;

} else if (computerScore === 5) {

    displayMessage.textContent = 'HAI PERSO!';
    //finalResultBox.appendChild(displayMessage);

    newGameButton.textContent = 'Nuova partita';
    newGameButton.setAttribute('id', "newgamebutton");
    finalResultBox.appendChild(newGameButton);

    newGameButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        displayMessage.textContent = '';

        playerScoreDisplay.textContent = `${playerScore}`;
        playerScoreBox.removeChild(playerScoreDisplay);
        playerScoreBox.appendChild(playerScoreDisplay);

        computerScoreDisplay.textContent = `${computerScore}`;
        computerScoreBox.removeChild(computerScoreDisplay);
        computerScoreBox.appendChild(computerScoreDisplay);

        //finalResultBox.removeChild(displayMessage);
        finalResultBox.removeChild(newGameButton);
    });

    return;
}
}

const buttons = document.querySelectorAll('.scelta');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const playerSelection = (`${e.target.id}`);
        if (computerScore === 5 || playerScore === 5) {
        playerScore = 0;
        computerScore = 0;

        playerScoreDisplay.textContent = `${playerScore}`;
        playerScoreBox.removeChild(playerScoreDisplay);
        playerScoreBox.appendChild(playerScoreDisplay);

        computerScoreDisplay.textContent = `${computerScore}`;
        computerScoreBox.removeChild(computerScoreDisplay);
        computerScoreBox.appendChild(computerScoreDisplay);

        finalResultBox.removeChild(newGameButton);
        }
        game(playerSelection);
    }
    );
});

//const nuovaPartita = document.querySelector('#newgamebutton');
//nuovaPartita.