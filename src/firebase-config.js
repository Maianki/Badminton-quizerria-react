// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL-6fpd-kuJMDIrJJicLDQCSfErywxJMI",
  authDomain: "badminton-quizerria.firebaseapp.com",
  projectId: "badminton-quizerria",
  storageBucket: "badminton-quizerria.appspot.com",
  messagingSenderId: "48873582359",
  appId: "1:48873582359:web:1a1802cc60e350a29ed152",
  measurementId: "G-QX2JRY8NMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
