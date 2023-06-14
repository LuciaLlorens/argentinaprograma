// Manejo de arreglos:
// a. Crea un arreglo vacío con el nombre de frutas.

let frutas = [];

// b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de variables o no.

let fruta1 = "mandarina";
let fruta2 = "manzana";
let fruta3 = "banana";
let fruta4 = "naranja";
let fruta5 = "quinoto";

frutas.push(fruta1, fruta2, fruta3, fruta4, fruta5);

// c. Deberás obtener la última fruta agregada y guardarla en la variable ultima. 
// Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La ultima fruta agregada fue: [ultima]”

let ultima = frutas[frutas.length -1];
console.log("La ultima fruta agregada fue: %s", ultima);
/*
Imrpime:
La ultima fruta agregada fue: quinoto
*/

// d. Deberás obtener la primera fruta agregada y guardarla en la variable primera. 
// Además deberás imprimir su valor por consola, respetando el siguiente formato
// “La primera fruta agregada fue: [primera]”

let primera = frutas[0];
console.log("La primera fruta agregada fue: %s", primera);
/*
Imprime:
La primera fruta agregada fue: mandarina
*/