// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6hJsJJzpt9DrY4BvxsGAn4ET6iPorLuE",
  authDomain: "netflixgpt-ba4f1.firebaseapp.com",
  projectId: "netflixgpt-ba4f1",
  storageBucket: "netflixgpt-ba4f1.appspot.com",
  messagingSenderId: "1014547187272",
  appId: "1:1014547187272:web:1352bfb8b04207a82d7a7d",
  measurementId: "G-6W0WB4594S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();