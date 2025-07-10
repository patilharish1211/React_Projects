// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdno_wc6OOyfUG4iF0_SxDIrzRiSZv66c",
  authDomain: "reactprojectauth-c8bf8.firebaseapp.com",
  projectId: "reactprojectauth-c8bf8",
  storageBucket: "reactprojectauth-c8bf8.appspot.com",
  messagingSenderId: "102254315986",
  appId: "1:102254315986:web:41882e6e073cc2bf7b600b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };






