// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_XA_ahaZ4DwI3H9PtVGeCbphDD_ArvWA",
  authDomain: "github-1de4c.firebaseapp.com",
  projectId: "github-1de4c",
  storageBucket: "github-1de4c.appspot.com",
  messagingSenderId: "668364345472",
  appId: "1:668364345472:web:84a45bbafcc95472201665",
  measurementId: "G-25GBEBEHCW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const Auth = getAuth(app);