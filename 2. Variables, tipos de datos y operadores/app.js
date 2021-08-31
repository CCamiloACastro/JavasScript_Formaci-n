/* Declaración y asignación de variables
 * Varibale en la consola
 * Tipo de variable
*/

var nombre = "Camilo";
console.log(nombre);
console.log(typeof(nombre));

var edad = 22;
console.log(edad);
console.log(typeof(edad));

var edad = "veintidos";
console.log(edad);
console.log(typeof(edad));

var sueldo = 10000.9;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

/*
 *OPERADORES MATEMÁTICOS
*/

var edadMaria, edadAna, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 20;
edadMaria = 30;
yearActual = 2021;

diferenciaEdad = edadMaria - edadAna;
sumaEdades = edadMaria + edadAna;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log("diferencia de edad " + diferenciaEdad);
console.log("Suma de las edades " + sumaEdades);
console.log("Año en que nació Ana " + yearAna);
console.log("Año en que nació Maria " + yearMaria);

//Operedadores logicos
var mayorAna = edadAna < edadMaria;
console.log(mayorAna);
// Operadores Unarios
console.log(edadMaria++);
console.log(edadMaria);