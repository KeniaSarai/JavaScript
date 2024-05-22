// String -- Cadena
const name = "Kenia";
const edad = "22";
const space = " ";

// Number -- cualquier número
const favNum = 15;
const favNum1 = 15.9;

// Boolean - 2 opciones (true or false)
const iloveCoding = true;
const iloveCoding1 = false;

// Underfined
let casa; // No le agrego un valor, asi que es underfined

// Null - nulo
const hoja = null;



//*********************************************************//
//CHALLENGES

// 1. Stringe Concatenation
/* Voy a crear tres variables constantes y les voy asignar unas palabras a cada una */
const first = "Welcome";
const second = "to the";
const third = "Jungle";

/* Hacer un console.log concatenando estas variables PERO voy a guardar esa frase en 
otra variable*/
// TU CÓDIGO AQUI
/* En este caso la palabra "UNION" trabaja como nuestra constante y para que nos salga
toda la frase, debemos llamar a la constante con "LOG" (sirve para llamar a nuestra variable)
y esta sea vista en el codigo final*/
 
const union = first + space + second + space + third;
console.log(union);

//*********************************************************//
            // TIPOS DE DATOS COMPUESTOS 
/* Nos permiten guardar variables colecciones de datos asociados a no */

// OBJECT

const persona = {
    /* NOMBRE -- VALOR // KEY VALUE PAIRS */
    /* KEY -- VALUE */
    //Utilizo STRINGS
    nombre: "Kenia Sarai Flores",
    nacimiento: "16/12/02",
    color0jas: "cafés",
    // Utilizo NUMBER
    edad: "22",
    // Utilizo BOOLEAN
    estudia: "flase",
}

console.log(persona);
// ¿CÓMO ACCEDEMOS A LOS VALORES DEL OBJETO?
/* Quiero acceder al nombre de la persona */
console.log("Mi nombre es" + persona.nombre);
console.log("Mi fecha de nacimiento es" + persona.nacimiento);
/* Si solo quieres acceder al objeto, no es necesario colocar una frase */
console.log(persona.edad);


/* Objetos vacios también son abjetos */
const empaty = {}


// ARRAY
/* Suelen ser objetos modificados */

const frutas = [ "bannana", "manzana", "melón", "pera", "sandia"]
/* Tipos de datos dentro de mi Array */
const miArray = [ 21, "ramen", true, undefined, false]
const miArray1 = [15, "manzana", [ 1, 2, 3, true, "bannana"], {uno:1}]
// ¿CÓMO ACCEDEMOS A LOS VALORES DEL ARRAY?
console.log(frutas);
/* ¿Cómo acceder a un solo ARRAY? */
/* Nuestro primer array se cuenta como 0 y después se comienza a contar de 1 en uno (0,1,2,3...)*/
console.log(frutas[3]);
console.log(frutas[2]);

const frutas1 = "sandia";
console.log(frutas1);
/* Si yo quiero acceder a alguna letra de mi variable, las letras tienen números y se llaman
con el número */
console.log(frutas1[3]);

/* Los array también puedes ser vacios */
const vacio = []

// AGREGAR VALORES A MI ARRAY INDIRECTAMENTE 
/* Método push (función) */
vacio.push("Hello")
console.log(vacio);
