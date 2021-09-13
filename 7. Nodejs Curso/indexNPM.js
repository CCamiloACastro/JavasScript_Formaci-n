const http = require('http');
const colors = require('colors');
const express = require('express');

// NPM (node package manager) administrador paquetes de node

function disp(a) {
    console.log(a);
}
/*
const handleServer = function(req,res){
    res.writeHead(200,{ 'Content-type' : 'text/html' });
    res.write('<h1>Hola mundo desde Node.js</h1>');
    res.end();
}
const server = http.createServer(handleServer);
// NPM colors
server.listen(3000, function(){
    disp('Server on port 3000'.green);
})
*/
const server = express();

server.get('/',function(req,res){
    res.send('<h1>Hola mundo desde Express y Node.js</h1>');
    res.end();
})

server.listen(3000, () => {
    disp('Server on port 3000'.red);
});
