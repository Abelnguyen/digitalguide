import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAYOcd30i4FC2rbJPvmWtgDxju5em1xDqk",
    authDomain: "master-b4623.firebaseapp.com",
    projectId: "master-b4623",
    storageBucket: "master-b4623.appspot.com",
    messagingSenderId: "210473931928",
    appId: "1:210473931928:web:2ba9a6905eb54cd57e6ced",
    measurementId: "G-LZ67QEV1M0"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const db= getFirestore(app);

  export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  