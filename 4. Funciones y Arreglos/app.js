function cuadrado(numero) {
    numero = numero * numero;
    console.log(numero);
}
function sumar(a, b, c = 3) { // C valor por defecto
    return a + b + c;
}
// otra manera de crear funciones
// funcion anonima sin nombre
var sumar2 = function (a, b, c) {
    return a + b + c;
}
// var num = 7;
// var numCuadrado;
// numCuadrado = cuadrado(num);

var result = sumar(1, 2);
console.log(result);
var result2 = sumar2(1, 2, 4);
console.log(result2);
// Funciones recursivas

var factorial = function (n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

console.log(factorial(6));

// funciones predefinidas
console.log(eval(factorial(4)));
console.log(eval('2 + 2'));
// expected output: 4

/**
 * Date.UTC(year)
Date.UTC(year, month)
Date.UTC(year, month, day)
Date.UTC(year, month, day, hour)
Date.UTC(year, month, day, hour, minute)
Date.UTC(year, month, day, hour, minute, second)
Date.UTC(year, month, day, hour, minute, second, millisecond)

 */
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
console.log(utcDate2.toUTCString());

// Arreglos arrays

var nombre = ['Camilo', 'David', 'Marlen','Pelos'];
var compras = new Array('leche', 'chocolate', 'huevos', 'tomate', 'cebolla');

console.log(nombre[3]); // de 0 a longitud
console.log(compras[3]);
// recorrer los arreglos
console.log("Recorrer Array");
for(var i=0;i<nombre.length;i++){
    console.log(nombre[i]);
}
for(var i=0;i<nombre.length;i++){
    console.log(compras[i]);
}
// otra manera
compras.forEach(function(elemento,indice){
    console.log(elemento, indice);
})
// Agregar Elemento
console.log('agregar elemento');
console.log(nombre);
nombre.push('Marcos');// agrega al final de la lista
console.log(nombre);
nombre.unshift('Liliana'); // agrega al principio de la lista
console.log(nombre);
nombre.pop();// elimina el ultimo de la lista
console.log(nombre);
nombre.shift();
console.log(nombre);

console.log(nombre.indexOf('Pelos'),'indice de Pelos');
// ARRAY.splice(start,cantidad)
nombre.splice(1,2)
console.log(nombre);


