// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsRTN1OxmOaIOI0cEb3Famphp5LcjuYzk",
  authDomain: "financialsentiments-793f7.firebaseapp.com",
  projectId: "financialsentiments-793f7",
  storageBucket: "financialsentiments-793f7.appspot.com",
  messagingSenderId: "112351634057",
  appId: "1:112351634057:web:7fc75e7440b466077d9c58",
  measurementId: "G-YC6FHYTNY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
