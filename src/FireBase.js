// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyjKz2-8XoaeVDdLBlkFGshNt2YrsGz28",
  authDomain: "aim-chat-94d1f.firebaseapp.com",
  projectId: "aim-chat-94d1f",
  storageBucket: "aim-chat-94d1f.appspot.com",
  messagingSenderId: "461061160036",
  appId: "1:461061160036:web:bf991595d6b1683ca93371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
