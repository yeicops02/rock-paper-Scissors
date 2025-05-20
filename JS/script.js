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

//PROMPT
function getHumanChoice () {
    let entradaUsuario = prompt('Vamos a jugar 5 Rondas. Elige una de estas 3 opciones "piedra", "papel" y "tijera"')
    return entradaUsuario;
}

 