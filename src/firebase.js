// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZs2cKysR9x_VKZUcYDtH-qW1C0OULIG8",
  authDomain: "meerkat-ai.firebaseapp.com",
  projectId: "meerkat-ai",
  storageBucket: "meerkat-ai.firebasestorage.app",
  messagingSenderId: "256799872315",
  appId: "1:256799872315:web:75e5d41313001b9940131e",
  measurementId: "G-BJMNFZCJFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);