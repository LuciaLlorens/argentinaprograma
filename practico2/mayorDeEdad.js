// a. Solicite al usuario ingresar su edad. 
const readlineSync = require('readline-sync');
const edad = readlineSync.question("Ingrese su edad: ");

// Si la edad es mayor o igual a 18, muestra por consola el mensaje: "Eres mayor de edad". 
// De lo contrario, muestra por consola el mensaje: "Eres menor de edad".

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
};