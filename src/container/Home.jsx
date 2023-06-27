import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth,  signInAnonymously} from "firebase/auth";
import { doc, setDoc, serverTimestamp} from "firebase/firestore"; 

import { useAuth } from '../auth';

import { gameUsed } from '../formSource';

import "./Home.css"
import {db , storage} from "../firebaseconfig"

const Home = () => {
  const currentUser = useAuth()
    const navigate = useNavigate()
    const auth = getAuth();
  const testAnonymous = ()=> {
    signInAnonymously(auth)
      .then(async (input) => {
        // console.log(input.user.uid)
        await setDoc(
          doc(db,"User",input.user.uid),{ //create collection that have login 
            uid: input.user.uid,
            timeStamp: serverTimestamp(),
          }
          )
        navigate('/Game')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  
  return (
    <>
      <button onClick={()=>navigate('/registration')}>singIn</button>
      <button onClick={testAnonymous}>guest</button>
    </>
  )
}

export default Home