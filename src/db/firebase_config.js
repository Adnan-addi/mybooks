import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// import * as firebase from 'firebase';
// import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiE6Fq1dYJnGk-KmHHroxFtNgbfSckif8",
  authDomain: "mybooks-2d4ef.firebaseapp.com",
  projectId: "mybooks-2d4ef",
  storageBucket: "mybooks-2d4ef.appspot.com",
  messagingSenderId: "668897058010",
  appId: "1:668897058010:web:09223d4ccaf7894bd599e3",
  measurementId: "G-7TQ4WDLFER"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} 
else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const myUser = firebase.auth().currentUser;

export { db , auth , myUser , app };