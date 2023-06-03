
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkJSeMDwHLs26Z-tXgX1jIKDNVot2DRpc",
  authDomain: "miniblog-4ae19.firebaseapp.com",
  projectId: "miniblog-4ae19",
  storageBucket: "miniblog-4ae19.appspot.com",
  messagingSenderId: "874602306296",
  appId: "1:874602306296:web:8d06e01fab81348811f90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};