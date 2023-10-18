// Import the functions you need from the SDKs you need
import { config } from "@/constants";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTHDOMAIN,
  databaseURL: config.FIREBASE_DATABASEURL,
  projectId: config.FIREBASE_PROJECTID,
  storageBucket: config.FIREBASE_STORAGEBUCKET,
  messagingSenderId: config.FIREBASE_MESSAGINGSENDERID,
  appId: config.FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
