function add(x1, x2){
    return x1+x2;
}
function substract(x1, x2){
    return x1-x2;
}
function multiply(x1, x2){
    return x1*x2;
}
function divide(x1, x2){
    if (x2==0){
        console.log('No se pude dividir en cero');
        //AQUI al no agregar return entonces aparecera en la consola UNDEFINED
    }else{
        return x1/x2;
    }
}
// exports.COMOSEVAALLAMARDESDEEOTROARCHIVO = FUNCION EN ESTE ARCHIVO
exports.add = add;
exports.sub = substract;
