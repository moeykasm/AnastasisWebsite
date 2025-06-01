import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVj53kVRlapnj-vIakkaXhrqbLrLjE6q8",
  authDomain: "anastasis-7ab1a.firebaseapp.com",
  projectId: "anastasis-7ab1a",
  storageBucket: "anastasis-7ab1a.firebasestorage.app",
  messagingSenderId: "905991157228",
  appId: "1:905991157228:web:0ddacdee1dba0e2a773cc9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const createUser = () => {
    createUserWithEmailAndPassword(auth, '', '')
    .then((userCredential) => {
      const user = userCredential.user;

      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage)
    });
}

export { auth, db }