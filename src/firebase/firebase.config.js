// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// VITE_apiKey=AIzaSyDA_1E5WZpUZ3IKUphnVQ11JMJvB0HFa-4
// VITE_authDomain=cars-doctor-ab5da.firebaseapp.com
// VITE_projectId=cars-doctor-ab5da
// VITE_storageBucket=cars-doctor-ab5da.appspot.com
// VITE_messagingSenderId=696067782836
// VITE_appId=1:696067782836:web:ef82577cace363a9227fe1