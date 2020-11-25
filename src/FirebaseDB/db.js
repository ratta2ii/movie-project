import firebaseConfig from "./config";
const firebase = require("firebase");
require("firebase/firestore");

// Initialize Firebase DB if none exist under current configs
// This statement is necessary to prevent errors
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default db;
