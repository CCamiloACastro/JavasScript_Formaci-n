const colors = require('colors');

console.log('START'.green);
import { initializeApp } from 'firebase/app';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtFMAVWz87j8i2ov3x5cIQsl4lUaWVdRk",
    authDomain: "servicio-domicilio-ea1e8.firebaseapp.com",
    databaseURL: "https://servicio-domicilio-ea1e8-default-rtdb.firebaseio.com",
    projectId: "servicio-domicilio-ea1e8",
    storageBucket: "servicio-domicilio-ea1e8.appspot.com",
    messagingSenderId: "913637502123",
    appId: "1:913637502123:web:edc94422aebd652986dbee"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

/*const db = getFirestore(app);


// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
//console.log(await getCities(db));
var database = firebase.database();

function writeUserData(userId, name) {
    firebase.database().ref('users/' + userId).set({
      username: name,
    });
  }*/