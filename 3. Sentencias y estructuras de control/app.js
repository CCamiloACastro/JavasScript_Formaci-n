var nombre = "Camilo";
var esCasado = false;
var edad = 22;
// if else sencillo
if(esCasado == true ){
    console.log(nombre + ' es casado');
}else{
    console.log(nombre + ' es soltero');
}

if (edad < 12){
    console.log(nombre + ' es un niño');
} else if ((edad >=12) && (edad <18)){
    console.log(nombre + ' es un adolecente');
} else if ((edad >=18) && (edad <60)){
    console.log(nombre + ' es un adulto');
}else{
    console.log(nombre + ' es un anciano')
}

// sentencia switch

var mes = 8;

switch(mes){
    case 1: 
        console.log('Enero');
    break;
    case 2: 
        console.log('febrero');
    break;
    case 3: 
        console.log('Marzo');
    break;
    case 4: 
        console.log('Abril');
    break;
    case 5: 
        console.log('Mayo');
    break;
    case 6: 
        console.log('Junio');
    break;
    case 7: 
        console.log('Julio');
    break;
    case 8: 
        console.log('Agosto');
    break;
    case 9: 
        console.log('Septiembre');
    break;
    case 10: 
        console.log('Octubre');
    break;
    case 11: 
        console.log('Noviembre');
    break;
    case 12: 
        console.log('Diciembre');
    break;
    default:
        console.log('Mes no encontrado');
}
// sentencia for
for (var index = 0; index < 10; index++) {
    var element = index;
    console.log(element);
}

//sentencia while
var i = 10;
while(i>=1){
    console.log(i);
    i-=2; // disminuye de 2 en 2
}

// sentencia Do while
var j = 1;
do {
 console.log('Consola Do '+j);
 j++;
}while(j <= 10);
console.log('Valor final '+j);
