import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDTkKUc2bp6hBDVX2qUW4cauFE9VPNL73g",
  authDomain: "tommy-d8cfb.firebaseapp.com",
  databaseURL: "https://tommy-d8cfb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tommy-d8cfb",
  storageBucket: "tommy-d8cfb.appspot.com",
  messagingSenderId: "903432939475",
  appId: "1:903432939475:web:7b6cc470464ee95007b126",
  measurementId: "G-DFMZL4VVMX"
  
})
export default firebaseApp;
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)