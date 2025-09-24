// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFlQ5qWV7YBp9jmIB5QgL7sIDy6h1BuOI",
  authDomain: "simple-firebase2-29df7.firebaseapp.com",
  projectId: "simple-firebase2-29df7",
  storageBucket: "simple-firebase2-29df7.firebasestorage.app",
  messagingSenderId: "130642014098",
  appId: "1:130642014098:web:4eaed30637688b1d66db4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);