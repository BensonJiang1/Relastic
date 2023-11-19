// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOzpiWpHpYwBOLgmNHgXoHSaUTJ8A9aQU",
  authDomain: "bionic-unity-382602.firebaseapp.com",
  projectId: "bionic-unity-382602",
  storageBucket: "bionic-unity-382602.appspot.com",
  messagingSenderId: "755676589992",
  appId: "1:755676589992:web:bf7c8e2927005178a3779d",
  measurementId: "G-P2L8P805EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

export default app;