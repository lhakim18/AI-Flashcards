// Import the functions you need from the SDKs you need
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
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
const useFirebase = () => {
  const [firebaseApp, setFirebaseApp] = useState(null);
  const [analytics, setAnalytics] = useState(null);
  const [db, setDb] = useState(null);

  useEffect(() => {
    isSupported().then((supported) => {
      if (supported) {
        const app = initializeApp(firebaseConfig);
        setFirebaseApp(app);

        // Analytics should only be initialized on the client side
        const analyticsInstance = getAnalytics(app);
        setAnalytics(analyticsInstance);

        // Firestore can be initialized safely
        const dbInstance = getFirestore(app);
        setDb(dbInstance);
      }
    });
  }, []);

  return { firebaseApp, analytics, db };
};

export default useFirebase;