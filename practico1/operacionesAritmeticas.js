// Operadores aritméticos:
// a. Crea cuatro variables que contengan valores numéricos.

let myVar1 = 9;
let myVar2 = 2;
let myVar3 = 15;
let myVar4 = 11;

// b. Suma las dos primeras variables y guarda el resultado en otra variable.

let sumaMyVar = myVar1 + myVar2; 
//11

// c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.

let restaMyVar = myVar3 - myVar4; 
//4

// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal.

let resultadoFinal = sumaMyVar * restaMyVar; 
//44

// e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.

let esPar = resultadoFinal % 2 === 0;
//true

//f. Imprima por consola un mensaje con el siguiente formato:
// “Mis variables iniciales fueron: [var1], [var2], [var3] y [var4]. La respuesta a verificar si el resultado final es par es: [esPar]”

console.log("Mis variables iniciales fueron: %d, %d, %d y %d. La respuesta a verificar si el resultado final es par es: %s", myVar1, myVar2, myVar3, myVar4, esPar);
/* 
Imprime:
Mis variables iniciales fueron: 9, 2, 15 y 11. La respuesta a verificar si el resultado final es par es: true
*/