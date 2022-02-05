//import firebase from "firebase"
import firebase from 'firebase/app';
import 'firebase/firestore';
// Initialize Firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwvCBp-_Is2oHilK8g5bZPYnxrzshUBos",
    authDomain: "fb-messenger-clone-a52d9.firebaseapp.com",
    projectId: "fb-messenger-clone-a52d9",
    storageBucket: "fb-messenger-clone-a52d9.appspot.com",
    messagingSenderId: "805713597077",
    appId: "1:805713597077:web:47a5c930841bdec0ebc19c",
    measurementId: "G-V6397WRPTR"
});
const database = firebaseApp.firestore();
export default database;