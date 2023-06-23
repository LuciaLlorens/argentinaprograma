// Escriba un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana. 
// La semana comienza el lunes y termina el domingo.

const readlineSync = require('readline-sync');
const diaSemana = readlineSync.question("Ingrese un numero del 1 al 7 representando un dia de la semana de lunes a domingo: ");
let diaSemanaNumber = Number(diaSemana);

// - Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
// - Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
// - Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
// - Y así sucesivamente …
// - Para cualquier otro número, muestra por consola el mensaje: "Número inválido".
// - NOTA: utilizar la sentencia switch-case.

switch(diaSemanaNumber) {
    case 1 :
        console.log("Hoy es lunes");
        break;
    case 2 :
        console.log("Hoy es martes");
        break;
    case 3 :
        console.log("Hoy es miércoles");
        break;
    case 4:
        console.log("Hoy es jueves");
        break;
    case 5:
        console.log("Hoy es viernes");
        break;
    case 6 :
        console.log("Hoy es sábado");
        break;
    case 7 :
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Número inválido");
};