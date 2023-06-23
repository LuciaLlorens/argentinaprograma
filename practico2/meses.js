// Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 representando los meses de un año; 
// donde 1 es enero, 2 es febrero, 3 es marzo, etc. 

const readlineSync = require('readline-sync');
const mes = readlineSync.question("Ingrese el numero de mes: ");

let todosLosMeses = [
    ["enero",31],
    ["febrero", 28],
    ["marzo", 31],
    ["abril", 30],
    ["mayo", 31],
    ["junio", 30],
    ["julio", 31],
    ["agosto", 31],
    ["septiembre", 30],
    ["octubre", 31],
    ["noviembre", 30],
    ["diciembre", 31],
];

// Su programa consistirá de imprimir por consola la cantidad de días que tiene el mes ingresado bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá 
// “La cantidad de dias del mes de enero es 31”.
// Para el alcance de este ejercicio, podemos pensar que febrero siempre tiene 28 días.

console.log("La cantidad de dias del mes de %s es %d",todosLosMeses[mes-1][0], todosLosMeses[mes-1][1]);
/*
Otra forma de hacerlo sé que es switch-case, conviertiendo la variable mes en número; definiendo variables sin valores
que luego serían agregados en los diferentes casos del switch-case; y finalmente imprimir con las variables definidas a partir
del switch-case.
*/