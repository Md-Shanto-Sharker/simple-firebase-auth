// Do Not Share Firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoYcmWBMLMfjeLwB-qhGM5BjNFan2OX7c",
  authDomain: "simple-firebase-auth-fc69a.firebaseapp.com",
  projectId: "simple-firebase-auth-fc69a",
  storageBucket: "simple-firebase-auth-fc69a.firebasestorage.app",
  messagingSenderId: "516222678730",
  appId: "1:516222678730:web:532af266eba67ac97f2633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);