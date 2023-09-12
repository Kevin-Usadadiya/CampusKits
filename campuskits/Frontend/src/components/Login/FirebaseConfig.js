import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6LNnlex5UC2YF-vZtsLiq7Tn9QfEQf28",
  authDomain: "campuskits-e656e.firebaseapp.com",
  projectId: "campuskits-e656e",
  storageBucket: "campuskits-e656e.appspot.com",
  messagingSenderId: "533630003590",
  appId: "1:533630003590:web:9acd56c84dacad8934a407",
  measurementId: "G-V7BVEGGEC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)