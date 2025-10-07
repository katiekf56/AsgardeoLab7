import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCOPtx9YRjn04AvIO0iW0MjSkDgV_RrsQo",
  authDomain: "auth-demo-5e01b.firebaseapp.com",
  projectId: "auth-demo-5e01b",
  storageBucket: "auth-demo-5e01b.firebasestorage.app",
  messagingSenderId: "339281730539",
  appId: "1:339281730539:web:1629f299e51f297e4357ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

 