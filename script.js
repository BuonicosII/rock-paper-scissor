//una funzione che restituisce carta sasso forbici per il computer
let playerScore = 0;
let computerScore = 0;

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

//una funzione round che contiene
//variabile sasso carta forbice da chiedere all'utente (prompt etc) -> case insensitive
//variabile sasso carta forbice computer
//condizioni di vittoria computer
//condizioni di vittoria utente
//condizioni di pareggio
//tre messaggi

function playRound() {
    let askPlayer = prompt("Sasso, carta o forbici?", " ");
    const playerSelection = (String(askPlayer)).toLowerCase();
    const computerSelection = getComputerChoice();

    switch(true) {
        case (playerSelection !== "sasso" && playerSelection !== "forbici" && playerSelection !== "carta"):
            console.log("Inserisci una delle tre variabili possibili");
            break;

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

console.log(game())

    



//funzione gioco
//5 round e poi dichiara un vincitore