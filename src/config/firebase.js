import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd-UuQyw7QKb5wEW2syUb3-WqkEd4p2fA",
  authDomain: "fire-app-ca4e0.firebaseapp.com",
  projectId: "fire-app-ca4e0",
  storageBucket: "fire-app-ca4e0.appspot.com",
  messagingSenderId: "181591775963",
  appId: "1:181591775963:web:43b0aa57f5c7c41e1e8afe",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);