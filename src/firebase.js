// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXNDT6M0t2jFkPVejh1zEzXSbqZlLQV_Y",
  authDomain: "advanced-frontend-78096.firebaseapp.com",
  projectId: "advanced-frontend-78096",
  storageBucket: "advanced-frontend-78096.firebasestorage.app",
  messagingSenderId: "961290476412",
  appId: "1:961290476412:web:828c4ba7e979b6dfd1a2f9",
  measurementId: "G-E0DMQV9VNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore DB
export const db = getFirestore(app);