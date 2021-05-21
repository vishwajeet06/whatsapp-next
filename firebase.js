import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrRVJeaUEC6tCASGgIIRVxSigxfzj6Ekk",
  authDomain: "whatsapp-blackc0d3r.firebaseapp.com",
  projectId: "whatsapp-blackc0d3r",
  storageBucket: "whatsapp-blackc0d3r.appspot.com",
  messagingSenderId: "438422510331",
  appId: "1:438422510331:web:e3bc45d1c0a4b01f6d6e5e",
  measurementId: "G-NGWQ7XWVF6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { provider, db, auth };
