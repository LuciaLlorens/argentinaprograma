const readlineSync = require('readline-sync');

// Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
// - 0 para "piedra",
// - 1 para "papel" y
// - 2 para "tijeras"
// Utilizar alguna estructura de datos para almacenar la relación entre los valores numéricos y los strings “piedra”, “papel” y “tijeras.
// Utilizar función de la librería Math que genera un número random.

function obtenerJugadaComputadora() {
    let numero = Math.floor(Math.random()*3);
    let lista = ["piedra", "papel", "tijeras"];
    return lista[numero];
}
/* 
utilizo Math.floor para redondear el número al entero más cercano hacia abajo.
*/

// Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su elección a través de la consola. 
// Los valores posibles son: piedra, papel o tijeras.

function obtenerJugadaUsuario() {
    return readlineSync.question("Ingrese piedra, papel o tijeras: ");
}

// Crea una función llamada determinarGanador que tomará como parámetros las jugadas de la computadora y del usuario. 
// Implementa las reglas del juego para determinar el ganador y retorná el resultado.

function determinarGanador(jugadaComputador, jugadaUsario) {
    switch (jugadaUsuario) {
        case "piedra":
            switch (jugadaComputador) {
                case "piedra":
                    return "Empate";
                    break;
                case "papel":
                    return "Gana la computadora";
                    break;
                case "tijeras":
                    return "Gana el usuario";
                    break;
            }
            break;
        case "papel":
            switch (jugadaComputador) {
                case "piedra":
                    return "Gana el usuario";
                    break;
                case "papel":
                    return "Empate";
                    break;
                case "tijeras":
                    return "Gana la computadora";
                    break;
            }
            break;
        case "tijeras":
            switch (jugadaComputador) {
                case "piedra":
                    return "Gana la computadora";
                    break;
                case "papel":
                    return "Gana el usuario";
                    break;
                case "tijeras":
                    return "Empate";
                    break;
            }
            break; 
        default:
            jugadaUsuario = readlineSync.question("Valor ingresado invalido. Por favor ingrese piedra, papel o tijeras: ");
            return determinarGanador(jugadaComputador, jugadaUsario);
    }
};
/* 
Si se ingresa cualquier otro valor, se vuelve a solicitar que se ingrese piedra, papel o tijeras de forma indefinida y vuelve a comenzar.
*/

// Llama a las funciones en el orden adecuado para ejecutar el juego:
// a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
// b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
// c) Invoca la función determinarGanador pasando como argumentos las jugadas de la computadora y del usuario. 
// Almacena el resultado en una variable.

/*
let jugadaComputador = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let ganador = determinarGanador(jugadaComputador, jugadaUsuario);
*/

// Imprime por pantalla el resultado del juego utilizando la función console.log().
// El mensaje debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego (quién ganó o si fue un empate).
// Se debe respetar el siguiente formato dependiendo del resultado:
// La computadora eligio: [jugadaComputador]. El usuario eligio: [jugadaUsuario]. 
// El resultado fue: [Empate | Gana la computadora | Gana el usuario].

/*
console.log("La computadora eligio: %s.", jugadaComputador);
console.log("El usuario eligio: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", ganador);
*/

// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantas jugadas quiere terminar el juego:

let jugadaComputador;
let jugadaUsuario;
let ganador;

let puntajeUsuario = 0;
let puntajeComputador = 0;


let cantidadDeJugadas = readlineSync.question("En cuantas jugadas quiere terminar el juego?: ");
cantidadDeJugadas = Number(cantidadDeJugadas);
/* 
Intenté hacer una función que contemplara los casos en los cuales algún usuario quisiera ingresar un valor que no fuera numérico y
el programa contestara que "el valor ingresado era inválido" pero no me salió. Quise hacerlo con typeof cantidadDeJugadas === "number"
pero me saltó error; igualmente con !isNan(cantidadDeJugadas).
*/

for (let numeroDeRonda = 1; cantidadDeJugadas >= numeroDeRonda; numeroDeRonda++) {
    jugadaComputador = obtenerJugadaComputadora();
    jugadaUsuario = obtenerJugadaUsuario();
    ganador = determinarGanador(jugadaComputador, jugadaUsuario);
    console.log("La computadora eligio: %s.", jugadaComputador);
    console.log("El usuario eligio: %s.", jugadaUsuario);
    console.log("El resultado fue: %s.", ganador);
    switch (ganador) {
        case "Gana la computadora":
            puntajeComputador++;
            break;
        case "Gana el usuario":
            puntajeUsuario ++;
            break;
        default:
            break;
    }
}
/* 
Imprime: 
La computadora eligio: [jugadaComputador]. 
El usuario eligio: [jugadaUsuario].
El resultado fue: [Empate | Gana la computadora | Gana el usuario].
*/

function obtenerGanadorFinal(puntajeComputador, puntajeUsuario) {
    if (puntajeComputador > puntajeUsuario) {
        return "Gana la computadora";
    } else if (puntajeUsuario > puntajeComputador) {
        return "Gana el usuario";
    } else {
        return "Empate";
    }
}

console.log("EL RESULTADO FINAL FUE: %s.", obtenerGanadorFinal(puntajeComputador, puntajeUsuario));
/*
Imprime:
EL RESULTADO FINAL FUE: [Empate | Gana la computadora | Gana el usuario].
*/