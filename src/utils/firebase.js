// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKb-RI4UJ0grrNZYn7fGO2E_MJk662tIo",
  authDomain: "netflixgpt-f4a83.firebaseapp.com",
  projectId: "netflixgpt-f4a83",
  storageBucket: "netflixgpt-f4a83.firebasestorage.app",
  messagingSenderId: "10587618393",
  appId: "1:10587618393:web:2afc3fa03fa9406ee9c548",
  measurementId: "G-W5PV317Y9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    

export const auth = getAuth();