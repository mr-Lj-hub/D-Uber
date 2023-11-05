// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadString } from "firebase/storage";
import {getDatabase} from 'firebase/database'
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB7uzjqLByasFn4S4zzYng1-RPReiHG2I4",
  authDomain: "duber-65c00.firebaseapp.com",
  projectId: "duber-65c00",
  storageBucket: "duber-65c00.appspot.com",
  messagingSenderId: "699322687653",
  appId: "1:699322687653:web:3bdc005ba4a0c8b2402d4c",
  measurementId: "G-QVV4TS540D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const db = getFirestore(app);
export default firebaseConfig;
export const storage = getStorage(app )
export const database = getDatabase(app);