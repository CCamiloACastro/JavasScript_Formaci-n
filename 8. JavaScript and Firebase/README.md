# Firebase y Javascript
## instalar desde CMD en la carpeta donde se quiere guardar el archivo
Se escribe 'npm install' para que descargue las dependencias
## Correr el programa
Correr el programa usando el comando 'npm start' o 'node main2.js'
## De que se conforma el archivo main2.js?

### Configura tu entorno de desarrollo
'const admin = require('firebase-admin');' Se instala usando el comando 'npm install firebase-admin'

luego se genera una clave tipo JSON en la plataforma google cloud platform en la sección 'IAM y administración' -> 'cuentas de usuario' del proyecto que se esta trabajando, esto le genera un archivo tipo JSON que se puede colocar en cualquier ruta, por mi parte la coloque en la misma carpeta del proyecto

**la Ruta D:/Documentos/1. Programas y Proyectos/....  es de mi computador se tendría que actualizar dependiendo adonde se guarde**

'const serviceAccount = require('D:/Documentos/1. Programas y Proyectos/JavaScript/8. JavaScript and Firebase/servicio-domicilio-ea1e8-4503d96feb04.json');'

*el paso a paso para de configurar el archivo se encuentra en el siguiente link
https://firebase.google.com/docs/firestore/quickstart?hl=es#node.js*

### Inicializa Cloud Firestore
#### Inicializa en tu propio servidor

'admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();'

## Agrega datos
### primera forma
'const docRef = db.collection('users').doc('Octopus Services');

docRef.set({
    first: 'SCRUM',
    last: 'Sprint 1',
    born: 2021
});
### segunda forma
db.collection('users').doc('aturing').set({
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
});'

## Leer Datos
La documentacion en la pagina de firebase no es tan correcta debido a que snapshot va a ser un [QuerySnapshot](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/QuerySnapshot) (not a [DocumentSnapshot](https://firebase.google.com/docs/reference/android/com/google/firebase/firestore/DocumentSnapshot)) por lo que la API no sabe con cuantos documentos estas tratando. QuerySnapshot no tiene un metodo llamado 'data()'. Se tiene que tratar cada dato individualmente 

**Para solucionar el error se pasa de 'snapshot.forEach((doc) =>...' a 'snapshot.then((doc) => {doc.docs.forEach(doc => {...' osea primero se coloca una funcion then() luego se convierte a documento usando '.docs' y ahi si, se puede usar 'forEach()'**

https://stackoverflow.com/questions/64379124/uncaught-in-promise-typeerror-snapshot-data-is-not-a-function-when-trying-to

### Forma según firebase
'const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});'
### primera forma
'var snapshot = db.collection('users').get();
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
});'
### segunda forma
' var imgRef = db.collection('users');
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
}); '
