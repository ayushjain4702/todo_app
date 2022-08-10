// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBULOLeAuFL36xw564wmINlEWB3urEHt94",
  authDomain: "todo-list-60e1d.firebaseapp.com",
  databaseURL: "https://todo-list-60e1d-default-rtdb.firebaseio.com",
  projectId: "todo-list-60e1d",
  storageBucket: "todo-list-60e1d.appspot.com",
  messagingSenderId: "917269994819",
  appId: "1:917269994819:web:00e2b07fd6f37068f6e3f6",
  measurementId: "G-BZ7F9FV0HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();