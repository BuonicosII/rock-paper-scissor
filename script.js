//una funzione che restituisce carta sasso forbici per il computer

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randomChoice === 1) {
        return "Sasso"
    } else if (randomChoice === 2) {
        return "Carta"
    } else {
        return "Forbici"
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
    const playerSelection = prompt("Sasso, carta o forbici?", " ");
    const computerSelection = getComputerChoice();
}

//funzione gioco
//5 round e poi dichiara un vincitore

