// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxUlh-RgC3_b2Uq-Hq7p39ZWAOV1Av-Cg",
  authDomain: "slips-in-a-box.firebaseapp.com",
  projectId: "slips-in-a-box",
  storageBucket: "slips-in-a-box.appspot.com",
  messagingSenderId: "1086595556975",
  appId: "1:1086595556975:web:58067fdc442dd832308f9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//getAuth registers the user to the firebase console
export const auth = getAuth();
export const db=getFirestore(app)
export default app;