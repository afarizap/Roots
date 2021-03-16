import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUGrH3_-EukmaU_TUWk9_qCaKBEeN5PJ0",
  authDomain: "roots-d.firebaseapp.com",
  projectId: "roots-d",
  storageBucket: "roots-d.appspot.com",
  messagingSenderId: "1053442695762",
  appId: "1:1053442695762:web:aa8652eb3b8579ead7b58b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
