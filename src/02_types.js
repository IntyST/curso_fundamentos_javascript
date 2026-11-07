// Tipos de datos primitivos de JavaScript

const texto = 'Hola'; // String: texto formado por caracteres.
const numero = 42; // Number: numero entero o decimal.
const booleano = true; // Boolean: valor verdadero (true) o falso (false).
const nulo = null; // Null: ausencia intencional de un valor.
const indefinido = undefined; // Undefined: valor que aun no ha sido definido.
const simbolo = Symbol('id'); // Symbol: identificador unico, util en casos avanzados.
const grande = 156n; // BigInt: numero entero grande; la n indica que es BigInt.

console.log(typeof texto); // Muestra "string", el tipo de texto.
console.log(typeof numero); // Muestra "number", el tipo de numero.
console.log(typeof booleano); // Muestra "boolean", el tipo verdadero/falso.
console.log(typeof nulo); // Muestra "object"; es una particularidad historica de JavaScript.
console.log(typeof indefinido); // Muestra "undefined", el tipo de valor indefinido.
console.log(typeof simbolo); // Muestra "symbol", el tipo de identificador unico.
console.log(typeof grande); // Muestra "bigint", el tipo de numero entero grande.


// Tipos de datos complejos

const objeto = { nombre: 'Inty', edad: 23 }; // Object: agrupa datos relacionados en propiedades.
const arreglo = [1,2,3,'string']; // Array: lista ordenada de valores; puede mezclar tipos.
const funcion = function () {}; // Function: bloque de codigo que puede ejecutarse cuando se llama.