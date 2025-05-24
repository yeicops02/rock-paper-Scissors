// Opciones aleatorios del juego
function getComputerChoice() {
    numeroAleatorio = Math.floor(Math.random() * 3)
    if (numeroAleatorio === 0) {
        return 'piedra'
    } else if (numeroAleatorio === 1) {
        return 'papel'
    } else {
        return 'tijera'
    }

}

//PROMPT
function getHumanChoice() {
    let entradaUsuario = prompt('Vamos a jugar 5 Rondas. Elige una de estas 3 opciones "piedra", "papel" y "tijera"')
    return entradaUsuario;
}

//Variables de puntuación de los jugadores
let humanScore = 0;
let computerScore = 0;

//Jugar solo 1 ronda
function playRound(humanChoice, computerChoice) {
    let eleccionUsuario = humanChoice.toLowerCase();

    if (eleccionUsuario === 'piedra' && computerChoice === 'tijera') {
        humanScore++;
        console.log(`¡Ganaste!. ${eleccionUsuario} le gana a la ${computerChoice}`)
    } else if (eleccionUsuario === 'piedra' && computerChoice === 'papel') {
        computerScore++;
        console.log(`¡Perdiste!. ${computerChoice} le gana a la ${eleccionUsuario}`)
    } else if (eleccionUsuario === computerChoice) {
        console.log('Hay un empate ')
    } else if (eleccionUsuario === 'tijera' && computerChoice === 'piedra') {
        computerScore++;
        console.log(`¡Perdiste!. ${computerChoice} le gana a la ${eleccionUsuario}`)
    } else if (eleccionUsuario === 'tijera' && computerChoice === 'papel') {
        humanScore++;
        console.log(`¡Ganaste!. ${eleccionUsuario} le gana a la ${computerChoice}`)
    } else if (eleccionUsuario === 'papel' && computerChoice === 'piedra') {
        humanScore++;
        console.log(`¡Ganaste!. ${eleccionUsuario} le gana a la ${computerChoice}`)
    } else if (eleccionUsuario === 'papel' && computerChoice === 'tijera') {
        computerScore++;
        console.log(`¡Perdiste!. ${computerChoice} le gana a la ${eleccionUsuario}. Puntaje`)
    }
}

//Loop 5 Rondas
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    /*for (let contadorRonda = 1; contadorRonda <= 5; contadorRonda++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);


    }
    if (humanScore < computerScore) {
        console.log(`De las 5 rondas el ganador fue Computer, el cual tuvo puntaje de: ${computerScore}`)
    } else {
        console.log(`De las 5 rondas tu fuiste el ganador, el cual tuviste de puntaje: ${humanScore}`)
    }*/
}

playGame()


