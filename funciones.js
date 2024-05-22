/* Fuction -- palabra reservada de JS que nos indica que es una función */
/* FUNCIÓN -- BLOQUE DE CÓDIGO */
/* saludo (nombre de mi función) */
function saludo(){
    /* Pedazo de lógica que requiere la función */
    return "hola"
}

/* LLAMAR O INVOCAR LA FUNCIÓN -> CALL THE FUCTION, INVOKE THE FUCTION */
console.log(saludo());


// PARÁMETROS DE UNA FUNCIÓN 
function suma(numero1, numero2){
    /* RETURN es el pedazo de lógica que regresa la función */
    return numero1 + numero2;
}
/* ARGUMENTOS */
console.log(suma(1,4));
console.log(suma(10,9));
console.log(suma(21,7));

// FUNCIONES QUE RECIBEN DATOS Y QUE NO RECIBEN DATOS
/* addTwo -> crear una función que acepta un número y regresa el número 
+ 2*/

function addTwo(number){
    /* Guardar mi resultado del número +2 en una variable */
    const result = number + 2;
    /* Regresar esa variable con el resultado final */
    return result;
}
/* Llamamos la función --> EJECUTAR LA FUNCIÓN, SI NO SOLO ESTAS 
GUARDANDO LA LOGICA  */

/* addTwo() --> Si es correcto */
/* addTwo --> No es correcto, no llama a nuestra función */

console.log(addTwo(5));
console.log(addTwo(35));
console.log(addTwo(51.4));
