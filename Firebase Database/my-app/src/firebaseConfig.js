// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLLzi245YciMe9kq6lBCjH-nhbaSed-LE",
  authDomain: "fir-database-e60af.firebaseapp.com",
  projectId: "fir-database-e60af",
  storageBucket: "fir-database-e60af.appspot.com",
  messagingSenderId: "190357057134",
  appId: "1:190357057134:web:7f99aee6233a533ee8007f",
  measurementId: "G-33C6E1Y4R0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };





