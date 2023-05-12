
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId


  // apiKey: "AIzaSyDA_1E5WZpUZ3IKUphnVQ11JMJvB0HFa-4",
  // authDomain: "cars-doctor-ab5da.firebaseapp.com",
  // projectId: "cars-doctor-ab5da",
  // storageBucket: "cars-doctor-ab5da.appspot.com",
  // messagingSenderId: "696067782836",
  // appId: "1:696067782836:web:ef82577cace363a9227fe1"
};

const app = initializeApp(firebaseConfig);
export default app;




// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId,
// };

// const app = initializeApp(firebaseConfig);

// export default app;

