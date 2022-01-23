// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Bpygv3HCtWd027AWWnxIp4AcO3aR0og",
  authDomain: "instaclone-application.firebaseapp.com",
  databaseURL:
    "https://instaclone-application-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "instaclone-application",
  storageBucket: "instaclone-application.appspot.com",
  messagingSenderId: "860850636973",
  appId: "1:860850636973:web:edc8b489a715031685de24",
  measurementId: "G-M24R0MEWQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();


export { app, db, collection, getDocs, addDoc };
