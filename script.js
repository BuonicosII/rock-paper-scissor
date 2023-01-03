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
            return "Inserisci una delle tre variabili possibili";
            break;

        case (playerSelection === "sasso" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "sasso"):
            return "Hai vinto!";
            break;
        
        case (playerSelection === "sasso" && computerSelection === "carta"):
        case (playerSelection === "carta" && computerSelection === "forbici"):
        case (playerSelection === "forbici" && computerSelection === "sasso"):
            return "Hai perso!";
            break;
        
        default:
            return "Pareggio!"
    }
}
console.log(playRound())
//funzione gioco
//5 round e poi dichiara un vincitore