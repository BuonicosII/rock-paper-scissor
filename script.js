
let playerScore = 0;
let computerScore = 0;

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
            return playerScore += 1;
            break;
        
        case (playerSelection === "sasso" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "sasso"):
            console.log("Hai perso!");
            return computerScore += 1;
            break;
        
        default:
            console.log("Pareggio!");
            return "Nessun punteggio";
    }

}

//una funzione gioco che chiama 5 volte la funzione round e tiene traccia del punteggio
//decretando il vincitore

function game() {

for (let i = 0; i < 5; i++) {
        playRound();
        console.log("PUNTEGGIO");
        console.log("Tu", playerScore);
        console.log("CPU", computerScore);
        }

if (playerScore > computerScore) {
    console.log("Hai sconfitto il computer: complimenti!");
    console.log("PUNTEGGIO FINALE");
    console.log("Tu", playerScore);
    console.log("CPU", computerScore);
} else if (playerScore < computerScore) {
    console.log("Il computer ti ha ownato, fai schifo!");
    console.log("PUNTEGGIO FINALE");
    console.log("Tu", playerScore);
    console.log("CPU", computerScore);
} else {
    console.log("Pareggio!");
    console.log("PUNTEGGIO FINALE");
    console.log("Tu", playerScore);
    console.log("CPU", computerScore);
}

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const playerSelection = (`${e.target.id}`);
        playRound(playerSelection);
    }
    );
});