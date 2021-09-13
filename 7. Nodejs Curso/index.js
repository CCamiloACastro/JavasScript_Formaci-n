const os = require('os');
const fs = require('fs');
const http = require('http');

function disp(a) {
     console.log(a);
}

disp(os.platform()); 
disp(os.freemem());
disp(os.totalmem());
disp(os.release());
// File System
// la tarea de crear un archivo no es tarea de nodejs sino del sistema operativo
/*fs.writeFile('./texto.txt','linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('cargando archivo');*/

fs.readFile('./texto.txt', function(err, data){
    if(err){
        disp(err);
    }else{
        disp(data);
        console.log(data.toString());
    }
})

const handleServer = function(req,res){
    res.writeHead(200,{ 'Content-type' : 'text/html' });
    res.write('<h1>Hola mundo desde Node.js</h1>');
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){
    disp('Server on port 3000');
})
// NPM (node package manager) administrador paquetes de node