import firebaseConfig from "./config";
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase DB if none exist under current configs
// This statement is necessary to prevent errors
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
