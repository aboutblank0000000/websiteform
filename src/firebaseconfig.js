import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBQOtWMad8LV5lUvWV091-c_RByMDAzl28",
  authDomain: "websiteform-1e868.firebaseapp.com",
  projectId: "websiteform-1e868",
  storageBucket: "websiteform-1e868.appspot.com",
  messagingSenderId: "436918107467",
  appId: "1:436918107467:web:c796cfe44c06056efcbcce",
  
})
export default firebaseApp;
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)