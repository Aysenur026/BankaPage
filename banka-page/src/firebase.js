
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-SKhvCbWZ03m9hui5H6UXsFTvxIgqfrc",
  authDomain: "aybank-8a7c0.firebaseapp.com",
  projectId: "aybank-8a7c0",
  storageBucket: "aybank-8a7c0.appspot.com",
  messagingSenderId: "1091071692196",
  appId: "1:1091071692196:web:ae7635a3b5ed96199f0531"
};

const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 export const auth =getAuth(app);
 export const provider= new GoogleAuthProvider();
 
  
