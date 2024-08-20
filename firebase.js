// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJb6TO7N0b-Z-5UIyusYwNuLzLok6WJt0",
  authDomain: "flashcardsaas-d8502.firebaseapp.com",
  projectId: "flashcardsaas-d8502",
  storageBucket: "flashcardsaas-d8502.appspot.com",
  messagingSenderId: "218797915259",
  appId: "1:218797915259:web:e3df9abbe1b6abe156f6de",
  measurementId: "G-B7L7NRCFHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}