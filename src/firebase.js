// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEsVeA4ESWUCIv3jnn84PR5mclEJvAdrE",
  authDomain: "nerd-net-8fc63.firebaseapp.com",
  projectId: "nerd-net-8fc63",
  storageBucket: "nerd-net-8fc63.appspot.com",
  messagingSenderId: "1058733291397",
  appId: "1:1058733291397:web:b96be09f61494a654a36ec",
  measurementId: "G-SG59TY2S7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };