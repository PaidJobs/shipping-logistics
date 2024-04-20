// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBggZaqh6ReKGzwVJod3bKrWGXF7HlOOVw",
  authDomain: "shipping-b14b7.firebaseapp.com",
  projectId: "shipping-b14b7",
  storageBucket: "shipping-b14b7.appspot.com",
  messagingSenderId: "481894107889",
  appId: "1:481894107889:web:5f7b2d92a6dc6d55513750",
  measurementId: "G-P29F8VF6L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);