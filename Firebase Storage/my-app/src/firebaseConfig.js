// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsUODZeXhWz06KCjmjDgFK67loTFz22ww",
  authDomain: "fir-storage-965d0.firebaseapp.com",
  projectId: "fir-storage-965d0",
  storageBucket: "fir-storage-965d0.appspot.com",
  messagingSenderId: "20336568797",
  appId: "1:20336568797:web:093192734756af1046ae34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firestore data base
export const db = getFirestore(app);
