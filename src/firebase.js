// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYgcJ6i1uJsQNL6eNYzg13_4YgTFz4PiQ",
  authDomain: "vthacks-12b47.firebaseapp.com",
  projectId: "vthacks-12b47",
  storageBucket: "vthacks-12b47.appspot.com",
  messagingSenderId: "382105170963",
  appId: "1:382105170963:web:70cb2c79ccae34b7ff3be6",
  measurementId: "G-4YRPRW71F9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getDatabase(app);


firebase.initializeApp(firebaseConfig);
var database = firebase.database();
export default database;