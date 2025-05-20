// Opciones aleatorios del juego
function getComputerChoice () {
    numeroAleatorio = Math.floor(Math.random() * 3)
    if (numeroAleatorio === 0) {
        return 'piedra'
    } else if (numeroAleatorio === 1) {
        return 'papel'
    } else {
        return 'tijera'
    }
   
}



 