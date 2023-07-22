import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtg31MlGrk9z3XuKufH4cZGu56I3krTfw",
    authDomain: "clone-c2c5b.firebaseapp.com",
    projectId: "clone-c2c5b",
    storageBucket: "clone-c2c5b.appspot.com",
    messagingSenderId: "737033914000",
    appId: "1:737033914000:web:70d6d2553c6fa1ad92fa15"
});

const db =  firebaseApp.firestore();

const auth = firebase.auth();

export{db,auth};