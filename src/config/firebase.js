import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAVYzv82yl6FakuT9FEvKZUrzqD63X32XQ",
  authDomain: "db-tiktok-jornada.firebaseapp.com",
  projectId: "db-tiktok-jornada",
  storageBucket: "db-tiktok-jornada.appspot.com",
  messagingSenderId: "192255035768",
  appId: "1:192255035768:web:aa8c266a76ec8cb9daa08d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;