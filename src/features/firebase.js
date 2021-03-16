import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRuSBsksRGtSQr0GmELaVo1xWrXDTaQ3c",
  authDomain: "roots-5fa0f.firebaseapp.com",
  databaseURL: "https://roots-5fa0f-default-rtdb.firebaseio.com",
  projectId: "roots-5fa0f",
  storageBucket: "roots-5fa0f.appspot.com",
  messagingSenderId: "578296383391",
  appId: "1:578296383391:web:67f01bac0108063a505faa",
  measurementId: "G-BY65DTL9WL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
