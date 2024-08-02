// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD717c9DseNpOQxi8b-sngS5-9xKdCw9YU",
  authDomain: "inventory-app-f69eb.firebaseapp.com",
  projectId: "inventory-app-f69eb",
  storageBucket: "inventory-app-f69eb.appspot.com",
  messagingSenderId: "158698955542",
  appId: "1:158698955542:web:e3aa1f4ec36d2cc5f1a637",
  measurementId: "G-CRCGJSEMH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}