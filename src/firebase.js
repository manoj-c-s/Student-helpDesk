// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "****************************",
  authDomain: "connect-37bba.firebaseapp.com",
  projectId: "connect-37bba",
  storageBucket: "connect-37bba.appspot.com",
  messagingSenderId: "10635415574",
  appId: "1:10635415574:web:2274b2baeef821cee1e537",
  measurementId: "G-LBSPXNN8HY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const githubProvider = new firebase.auth.GithubAuthProvider();
const db = firebaseApp.firestore();

export { auth, googleProvider, githubProvider };
export default db;
