import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA704-VtSDY_5RldxpnqebDmVE0CT3GtPc",
  authDomain: "petstore-f3111.firebaseapp.com",
  projectId: "petstore-f3111",
  storageBucket: "petstore-f3111.appspot.com",
  messagingSenderId: "350664914137",
  appId: "1:350664914137:web:b6fd8a747e1359434dbac8",
  measurementId: "G-D28VPWBDQJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };