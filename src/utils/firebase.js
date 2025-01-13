// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsFytiftYlzZxy29V5chndv2tB50hTjhE",
  authDomain: "fir-gpt-b84d3.firebaseapp.com",
  projectId: "fir-gpt-b84d3",
  storageBucket: "fir-gpt-b84d3.firebasestorage.app",
  messagingSenderId: "481026051207",
  appId: "1:481026051207:web:cecc600e3d67286cc5bc22",
  measurementId: "G-ZNSRZNRNJZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
