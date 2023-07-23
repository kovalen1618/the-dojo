// Firebase
import firebase from "firebase/app";

// Services
import 'firebase/firestore';
import 'firebase/auth';

// Config Object
const firebaseConfig = {
  apiKey: "AIzaSyC9xgekF6SDqK7SoHxezM1UMzwC99ghB0U",
  authDomain: "thedojosite-c800a.firebaseapp.com",
  projectId: "thedojosite-c800a",
  storageBucket: "thedojosite-c800a.appspot.com",
  messagingSenderId: "880796387501",
  appId: "1:880796387501:web:332a632c577a15acb9de24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

// Export Services
export { projectFirestore, projectAuth, timestamp };