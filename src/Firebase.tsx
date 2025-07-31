import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4sAQGX1jvZr6l6FN4rGhmrnxMx0WzhjA",
  authDomain: "portfolio-be0ec.firebaseapp.com",
  projectId: "portfolio-be0ec",
  storageBucket: "portfolio-be0ec.firebasestorage.app",
  messagingSenderId: "734688448995",
  appId: "1:734688448995:web:61dce1a244863b5e2c50d6",
  measurementId: "G-X5TTYXZ33T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);