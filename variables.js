// Esto es un comentario

// Shift + ctrl + P =se abre la parte de abajo
/* Comentario de 
varias 
líenas */

console. log()
// CONSOLE. LOG es una función para "imprimir" o "ver" cualquier variable o data
console. log("Hello World");

/* VARIABLES Y CONSTANTES - las variables som contenedores
    VAR - LET - CONST
    Para variables que se puedan cambiar más adelante, usamos VAR o LET
    Para variabales constantes, usames CONST
*/

/* LET Y CONST */

/* LET - algo que va a cambiar*/
/* keyword(let OR const) name = value*/
/* Estoy creando esta variable llamada fridge y inicializandola con el calor "empity"*/

let fridge = "empity";

/* Lee el valor de la variable que te voy a "pasar" entre paréntesis */
console. log(fridge);
/* Cambiar el valor de la variable usamos solo su nombre */
fridge = "full";
console. log(fridge)

var casa = "sucia";
console.log(casa);
casa = "limpia";
console.log(casa);

/* CONST - algo que no va a cambiar*/
const mascota = "gato";
console.log(mascota);
/*mascota = "pez";
console.log(nascota);*/

/* NOBRANDO VARIABLES */
/* 1. Nombres se distinguen entre mayúsculas y minúsculas */
let a = "hola";
let A = "adiós";
console. log(a);
console. log(A);
// 2. Nombres debene de comenzar con carácter en minúscula
// 3. Nombres no pueden comenzar con números
// 4. Nombres no pueden conetener simbolos
// 5. Nombres en camle1Cased son las mejores prácticas

// VÁLIDAS
let user;
let estudiante3;
let favoriteCandy;
let camelCasedVariable;

// NO VÁLIDAS
let camelcasedvariable;

/* CHALLENGE VARIABLKES */
let firstName = "Jenny";
// CONCATENACIÓN
console.log("Hola" + firstName);
let lastName = "González";
console.log("Hello" + firstName + "" + lastName );
console.log("Hello this is my Mother´s something");


// CHALLENGE DE VARIABLES JAVASCRIPT
/* Declara una variable favFood y asignale el valor de "tacos" */
let favFood = "tacos";

/* Intenta desconectar la línea de abajo para probar tu respuesta*/
 console.log("Mi comida favorita es" + favFood);

 /* Desconecta la línea de abajo para verificar tu trabajo*/
favFood = "pizza"
console.log("No, pero en serio, mi comida favorita es " + favFood);