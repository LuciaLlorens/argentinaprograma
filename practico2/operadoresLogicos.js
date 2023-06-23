// Escribe un programa que solicite al usuario ingresar un número entero. 

const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero entero: ");
let numeroNumber = Number(parseInt(numero));
/*
Hago parseInt() para convertir el número en entero, en el caso de que se quiera ingresar un número
con decimales
*/

// A continuación, evalúa las siguientes condiciones:
// - Si el número es positivo y par, muestra por consola el mensaje: 
// "El numero es positivo y par".
// - Si el número es positivo e impar, muestra por consola el mensaje: 
// "El numero es positivo e impar".
// - Si el número es negativo, muestra por consola el mensaje: 
// "El numero es negativo".
// - Si el número es cero, muestra por consola el mensaje: 
// "El numero es cero".
// NOTA: utilizar los operadores lógicos.

if (numeroNumber > 0 && (numeroNumber % 2 === 0)) {
    console.log("El numero es positivo y par");
} else if (numeroNumber > 0 && (numeroNumber % 2 !== 0)) {
    console.log("El numero es positivo e impar");
} else if (numeroNumber === 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
};