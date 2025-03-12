// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1BthyqzHEm6tgynG563Iy1wiRVFRJoDg",
  authDomain: "medassist-367eb.firebaseapp.com",
  projectId: "medassist-367eb",
  storageBucket: "medassist-367eb.firebasestorage.app",
  messagingSenderId: "78124466702",
  appId: "1:78124466702:web:cc5b325500c3bf8272f25f",
  measurementId: "G-79JBH0H60W"
};

const app = initializeApp(firebaseConfig);

// Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { auth, db, storage, analytics };
export default app;