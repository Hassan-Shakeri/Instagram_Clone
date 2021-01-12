import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdKfwJGN7LEUk3SAssqHgPmVIch5nQuuo",
    authDomain: "instagram-clone-f47c0.firebaseapp.com",
    databaseURL: "https://instagram-clone-f47c0.firebaseio.com",
    projectId: "instagram-clone-f47c0",
    storageBucket: "instagram-clone-f47c0.appspot.com",
    messagingSenderId: "398397527202",
    appId: "1:398397527202:web:671b8a1a5ccce119d473fb",
    measurementId: "G-0ZZ2D20HFT"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  //export default db;
