import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoscgSrbT3fjkNrhTdyFeH4Z9igCZl45M",
  authDomain: "filmyverse-b4d9f.firebaseapp.com",
  projectId: "filmyverse-b4d9f",
  storageBucket: "filmyverse-b4d9f.appspot.com",
  messagingSenderId: "423654765603",
  appId: "1:423654765603:web:cb66452ef2bd8f6c9b2d96"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;