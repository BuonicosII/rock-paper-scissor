
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
            console.log("Hai vinto!");
            playerScore += 1;
            playerScoreDisplay.textContent = `${playerScore}`;
            playerScoreBox.removeChild(playerScoreDisplay);
            playerScoreBox.appendChild(playerScoreDisplay);
            return;
            break;
        
        case (playerSelection === "sasso" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "sasso"):
            console.log("Hai perso!");
            computerScore += 1;
            computerScoreDisplay.textContent = `${computerScore}`;
            computerScoreBox.removeChild(computerScoreDisplay);
            computerScoreBox.appendChild(computerScoreDisplay);
            return;
            break;
        
        default:
            console.log("Pareggio!");
            return "Nessun punteggio";
    }

}

//una funzione gioco che chiama 5 volte la funzione round e tiene traccia del punteggio
//decretando il vincitore

function game(playerSelection) {
        playRound(playerSelection);

if (playerScore === 5) {
    console.log("Hai sconfitto il computer: complimenti!");
    console.log("PUNTEGGIO FINALE");
    console.log("Tu", playerScore);
    console.log("CPU", computerScore);
    return;
} else if (computerScore === 5) {
    console.log("Il computer ti ha ownato, fai schifo!");
    console.log("PUNTEGGIO FINALE");
    console.log("Tu", playerScore);
    console.log("CPU", computerScore);
    return;
}
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const playerSelection = (`${e.target.id}`);
        game(playerSelection);
        let playerScoreBox = document.querySelector('#playerScore');
    }
    );
});