import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyChJeWv4KBlJS4G2TImLnLWNklTX3-OcZI",
    authDomain: "fir-storage-eb5b2.firebaseapp.com",
    projectId: "fir-storage-eb5b2",
    storageBucket: "fir-storage-eb5b2.appspot.com",
    messagingSenderId: "358428754706",
    appId: "1:358428754706:web:3ec14029a7bf660fdca9cb",
    measurementId: "G-5RM76NJE2L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
