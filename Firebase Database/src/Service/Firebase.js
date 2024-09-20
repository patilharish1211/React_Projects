// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNXjPTa5x8oIEtoNm1rU9uF3BjVKV0XSo",
  authDomain: "googal-auth-50c9e.firebaseapp.com",
  projectId: "googal-auth-50c9e",
  storageBucket: "googal-auth-50c9e.appspot.com",
  messagingSenderId: "144235198554",
  appId: "1:144235198554:web:c6a3b17fbe4b35afdcc063"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export const provider = new GoogleAuthProvider();