// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ2WLM8cC4YpDuTP1O0U9nQnLEj0qb9rA",
  authDomain: "todo-app-35935.firebaseapp.com",
  projectId: "todo-app-35935",
  storageBucket: "todo-app-35935.appspot.com",
  messagingSenderId: "705074733982",
  appId: "1:705074733982:web:73f91b3f0729efcf56ac8f",
  measurementId: "G-PVGH9CT6BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);