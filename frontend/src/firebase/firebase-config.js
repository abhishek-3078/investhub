// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object from the Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDhANnZx5VzJvOiVJa4lapleSrADgl9N98",
  authDomain: "chat-app2-43ae0.firebaseapp.com",
  projectId: "chat-app2-43ae0",
  storageBucket: "chat-app2-43ae0.firebasestorage.app",
  messagingSenderId: "168390698826",
  appId: "1:168390698826:web:e3fef69ca3c5e519cac3b3",
  measurementId: "G-YQVS3G7N0Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
