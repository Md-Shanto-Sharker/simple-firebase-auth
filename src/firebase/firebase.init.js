// Do Not Share Firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVzdYNrHic-GGuT9WhD-qRa1r0tuiFj98",
  authDomain: "simple-firebase-auth-2-602bd.firebaseapp.com",
  projectId: "simple-firebase-auth-2-602bd",
  storageBucket: "simple-firebase-auth-2-602bd.firebasestorage.app",
  messagingSenderId: "842708728003",
  appId: "1:842708728003:web:c6067f4a9bbc4e7bd00a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);