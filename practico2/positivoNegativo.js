// b. Solicite al usuario ingresar un número. 
const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingrese un numero: ");
let numeroNumber = Number(numero);
/*
convierto la variable numero de string a number, para poder hacer la comparación de igual estricto.
*/

// Si el número es positivo, muestra por consola el mensaje:
// "El numero es positivo". 
// Si el número es igual a cero, muestra por consola el mensaje: 
// "El numero es cero". 
// Si el número es negativo, muestra por consola el mensaje: 
// "El numero es negativo".

if (numeroNumber > 0) {
    console.log("El numero es positivo");
} else if (numeroNumber === 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
};
// Nota: al ser string la variable numero cuando pongo triple igual (===) en la comparación de dicha variable y 0 me 
// sale que el resultado es "El numero es negativo"; pero cuando pongo doble igual (==) me da el resultado correcto "El numero es cero".
// Esto es porque uno es string y el otro es un number, por lo que la comparación debe ser no estricta. Por esto el resultado sería
// convertir el string en number con Number().