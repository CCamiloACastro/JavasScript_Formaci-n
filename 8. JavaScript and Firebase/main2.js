const admin = require('firebase-admin');

//const serviceAccount = require('./path/to/serviceAccountKey.json');
//const serviceAccount = require('D:/Documentos/1. Programas y Proyectos/JavaScript/8. JavaScript and Firebase/servicio-domicilio-ea1e8-4503d96feb04.json');
const serviceAccount = require('C:/Users/cekal/Downloads/servicio-domicilio-ea1e8-4503d96feb04.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
// Manera 1 de agregar datos 
const docRef = db.collection('users').doc('Octopus Services');

docRef.set({
    first: 'SCRUM',
    last: 'Sprint 1',
    born: 2021
});
// Manera 2 de agregar datos 
db.collection('users').doc('aturing').set({
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
});

console.log('mensaje despues de agregar datos');

// lectura de los datos 
console.log('Primera forma de leer los datos');
var snapshot = db.collection('users').get();
//const snapshot = db.collection('users').get();
snapshot.then((doc) => {
    if (doc.docs.length > 0) {
        doc.docs.forEach(doc => {
            // doc es un DocumentSnapshot with el dato actual
            const data = doc.data();
            console.log(data);
        })
    }
}).catch((err) => {
    console.log('EL ERROR ES E SIGUIENTE');
    console.log(err);
});

console.log('Segunda forma de leer los datos');

var imgRef = db.collection('users');
//console.log(imgRef);
imgRef.get().then(function (snapshot) {
    if (snapshot.docs.length > 0) {
        snapshot.docs.forEach(doc => {
            // doc is a DocumentSnapshot with actual data
            const data = doc.data();
            console.log(data);
        })
    }
    else {
        // decidir que se quiere hacer si no se retornan documentos desde el query
    }
});
