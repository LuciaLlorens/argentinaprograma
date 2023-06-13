// Manejo de strings: 
// Los valores iniciales de cita y substring son los siguientes:
// cita = “Tres tristes tigres comen trigo en un trigal”
// substring = “tigres comen trigo”

let cita = "Tres tristes tigres comen trigo en un tigral"
let substring = "tigres comen trigo"

// a. Recuperes la longitud de la cita y la guardes en una variable llamada tamañoDeCita.
// Deberás imprimir por consola un mensaje con el siguiente formato:
// “El tamaño de la cita es: [tamañoCita]”

let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: %d", tamañoDeCita);
/*
Imprime:
El tamaño de la cita es: 44
*/

// b. Busques la posición del índice donde aparece substring en cita, y almacenes ese valor en una variable llamada indice.
// Deberás imprimir por consola un mensaje con el siguiente formato:
// “El indice del substring es: [indice]”

let indice = cita.indexOf(substring);
console.log("El indice del substring es: %d", indice);
/* 
Imprime:
El indice del substring es: 13
*/

// c. Usa una combinación de las variables que tienes y las propiedades/métodos de cadena disponibles para recortar la cita original a
// "Tres tristes tigres comen trigo", y la guardes en una variable llamada citaRevisada.
// Por último, para verificar que el valor de citaRevisada es correcto, deberás imprimirla por consola.

let citaRevisada = cita.replace(" en un tigral", "");
console.log(citaRevisada);
/*
Imprime:
Tres tristes tigres comen trigo
*/