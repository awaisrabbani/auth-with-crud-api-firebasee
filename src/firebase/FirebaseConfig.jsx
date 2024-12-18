import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBuko0Tu4u6mJh_f140Bo-ohuXivfe4HVU",
  authDomain: "auth-a43d3.firebaseapp.com",
  projectId: "auth-a43d3",
  storageBucket: "auth-a43d3.firebasestorage.app",
  messagingSenderId: "925540483447",
  appId: "1:925540483447:web:1bc4570451af9975ad2172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireDb = getFirestore(app)

