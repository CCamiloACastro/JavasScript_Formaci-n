console.log(document.title);
document.title = 'Prueba de titulo';
console.log(document.title);

var h1 = document.getElementsByTagName('h1');
//console.log(h1);
h1[0].innerHTML = 'Prueba';

var boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', mensaje);

function mensaje(){
    alert('Le dio click');
}