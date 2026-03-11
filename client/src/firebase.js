// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Optional: only if you really want analytics
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVhnHxwWx4I9D-CSvnTfeBp2n0xlKAx14",
  authDomain: "dashboard-auth-84571.firebaseapp.com",
  projectId: "dashboard-auth-84571",
  storageBucket: "dashboard-auth-84571.firebasestorage.app",
  messagingSenderId: "384657756310",
  appId: "1:384657756310:web:6232ad3dd7604bab5d72b7",
  measurementId: "G-0W62B8M0SB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Optional: Analytics (can remove if not needed)
getAnalytics(app);