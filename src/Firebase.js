import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAw8tZF0PTN0AVx6uYnjevr4z5mcpyBjWI",
  authDomain: "facebook-clone-70920.firebaseapp.com",
  databaseURL: "https://facebook-clone-70920.firebaseio.com",
  projectId: "facebook-clone-70920",
  storageBucket: "facebook-clone-70920.appspot.com",
  messagingSenderId: "830339847801",
  appId: "1:830339847801:web:d75f8a8ae766fe984c26a8",
  measurementId: "G-LGP9686ZW5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
