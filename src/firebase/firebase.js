import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9YPQoNzrKVWpPJGKhwGCmHiXSuyZrXHY",
  authDomain: "reactgalliano.firebaseapp.com",
  projectId: "reactgalliano",
  storageBucket: "reactgalliano.appspot.com",
  messagingSenderId: "147083717559",
  appId: "1:147083717559:web:0e30c2060d1e3a90bc1632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)