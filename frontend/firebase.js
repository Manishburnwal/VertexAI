import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vertexai-2bf21.firebaseapp.com",
  projectId: "vertexai-2bf21",
  storageBucket: "vertexai-2bf21.firebasestorage.app",
  messagingSenderId: "474298239134",
  appId: "1:474298239134:web:736daed940d591aa7f938f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider()