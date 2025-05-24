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
function playerSelection(e) {
    return e.target.innerText;
}


//Variables de puntuación de los jugadores
let humanScore = 0;
let computerScore = 0;

//Jugar solo 1 ronda
function playRound(humanChoice, computerChoice) {

    let eleccionUsuario = humanChoice.toLowerCase();

    if (eleccionUsuario === 'piedra' && computerChoice === 'tijera') {
        humanScore++;
        resultado_texto.textContent = `¡Ganaste!. ${eleccionUsuario.toUpperCase()} le gana a ${computerChoice.toUpperCase()}`;
        score_parrafo.textContent = `Tu Puntaje: ${humanScore}`

    } else if (eleccionUsuario === 'piedra' && computerChoice === 'papel') {
        computerScore++;
        resultado_texto.textContent = `¡Perdiste!. ${computerChoice.toUpperCase()} le gana a ${eleccionUsuario.toUpperCase()}`
        puntaje_computadora.textContent = `Puntaje Computer: ${computerScore}`
    } else if (eleccionUsuario === computerChoice) {
        resultado_texto.textContent = 'Hay un empate'
    } else if (eleccionUsuario === 'tijera' && computerChoice === 'piedra') {
        computerScore++;
        resultado_texto.textContent = `¡Perdiste!. ${computerChoice.toUpperCase()} le gana a ${eleccionUsuario.toUpperCase()}`
        puntaje_computadora.textContent = `Puntaje Computer: ${computerScore}`
    } else if (eleccionUsuario === 'tijera' && computerChoice === 'papel') {
        humanScore++;
        resultado_texto.textContent = `¡Ganaste!. ${eleccionUsuario.toUpperCase()} le gana a ${computerChoice.toUpperCase()}`
        score_parrafo.textContent = `Tu Puntaje: ${humanScore}`
    } else if (eleccionUsuario === 'papel' && computerChoice === 'piedra') {
        humanScore++;
        resultado_texto.textContent = `¡Ganaste!. ${eleccionUsuario.toUpperCase()} le gana a ${computerChoice.toUpperCase()}`
        score_parrafo.textContent = `Tu Puntaje: ${humanScore}`
    } else if (eleccionUsuario === 'papel' && computerChoice === 'tijera') {
        computerScore++;
        resultado_texto.textContent = `¡Perdiste!. ${computerChoice.toUpperCase()} le gana a ${eleccionUsuario.toUpperCase()}`
        puntaje_computadora.textContent = `Puntaje Computer: ${computerScore}`
    }
}

//Loop 5 Rondas
function playGame(e) {
    

        const humanSelection = playerSelection(e);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

   
    
    if (humanScore === 5){
        jugadorGanador.textContent = `Has sido el Ganador del JUEGO con ${humanScore} puntos`;
        puntaje_computadora.textContent = "";
        score_parrafo.textContent = "";
        botonPiedra.disabled = true;
        botonPapel.disabled = true;
        botonTijera.disabled = true;
        setTimeout (() => {
            resultado_texto.textContent = "";
        }, 2000)
        resetButton.textContent = "Volver a Jugar"
        resetButton.classList.add('reseteo')
        containerDIV.appendChild(resetButton);
        resetButton.addEventListener('click', Reset)
            
    }
    if (computerScore === 5) {
        jugadorGanador.textContent = `Computer ha sido el Ganador del JUEGO con ${computerScore} puntos`;
        puntaje_computadora.textContent = "";
        score_parrafo.textContent = "";
        botonPiedra.disabled = true;
        botonPapel.disabled = true;
        botonTijera.disabled = true;
        setTimeout (() => {
            resultado_texto.textContent = "";
        }, 2000)
        resetButton.textContent = "Volver a Jugar"
        resetButton.classList.add('reseteo')
        containerDIV.appendChild(resetButton);
        resetButton.addEventListener('click', Reset)

    }
        
 }

 function Reset () {
    resetButton.remove()
    humanScore = 0;
    computerScore = 0;
    jugadorGanador.textContent = "";
    botonPiedra.disabled = false;
    botonPapel.disabled = false;
    botonTijera.disabled = false;
 }


//Sección Escuchador de eventos
const botonPiedra = document.querySelector('.piedra');
const botonPapel = document.querySelector('.papel');
const botonTijera = document.querySelector('.tijera');

const resultado_texto = document.querySelector('.parrafo_resultado')
const score_parrafo = document.querySelector('.parrafo_score_humano')
const puntaje_computadora = document.querySelector('.parrafo_score_computer')
const jugadorGanador = document.querySelector('.winning_player')
const containerDIV = document.querySelector('.container_resultado')

const resetButton = document.createElement('button')





botonPiedra.addEventListener("click", playGame);
botonPapel.addEventListener("click", playGame);
botonTijera.addEventListener("click", playGame);

