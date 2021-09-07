// acortar console 
function disp(data) {
    console.log(data);
}
// los botones no van a cambiar
const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName('opera');
const botonDelete = document.getElementsByName('delete')[0];
const botonIgual = document.getElementsByName('igual')[0];
const botonCorchetes = document.getElementsByName('corchetes');
const botonAbsoluto = document.getElementsByName('abs'); // no aplicado
var result = document.getElementById('result');
// variable para los calculos
var opeActual = '';
var openAnterior = '';
var operacion = undefined;

// Funciones Click
botonNumeros.forEach(function (boton) { //numeros
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    })
});
botonOpera.forEach(element => { // operaciones
    element.addEventListener('click', function () {
        selectOperacion(element.innerText);
    })
});
botonIgual.addEventListener('click', function () { // igual
    calcular();
    actualizarDisplay();
})
botonDelete.addEventListener('click', function () { // borrar
    clear();
    actualizarDisplay();
})

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
// Funciones de calculo
function actualizarDisplay() {
    result.value = opeActual;
}
function clear() {
    opeActual = "";
    openAnterior = "";
    operacion = undefined;
}
function selectOperacion(op) {
    if (opeActual == '') return;
    if (opeActual !== '') {
        calcular();
    }
    operacion = op.toString();
    openAnterior = opeActual;
    opeActual = '';
}
function calcular() {
    var calculo;
    const anterior = parseFloat(openAnterior);
    const actual = parseFloat(opeActual);

    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    openAnterior = '';
}