
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCt7Ayn-v9eVW_BguCacEXarC2cN2rZnYE",
  authDomain: "vishal-f5d99.firebaseapp.com",
  projectId: "vishal-f5d99",
  storageBucket: "vishal-f5d99.appspot.com",
  messagingSenderId: "69141882467",
  appId: "1:69141882467:web:c3fddd4ce484e16fcbba56",
  measurementId: "G-GZXBGH49RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;
