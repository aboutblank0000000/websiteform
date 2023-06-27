import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword }from "firebase/auth"
import { auth} from '../firebaseconfig';



import Login from '../component/gmailLogin'
import GoogleLogin from '../component/googleLogin'

import './Login.css'
export const MainLogin = () => {
  const navigate = useNavigate()

  const handleLogin = async (values)=>{
    const {txtEmail, txtPassword} = values
    try{
      await signInWithEmailAndPassword(auth,txtEmail,txtPassword)
      
      navigate("/Game")
      console.log("succes")
    }catch(error){
      alert(error)
    }
  }


  return (    
    <div className='center'>
      <div className='main'>
        <span className='title'>Login</span>
        <Login handleLogin={handleLogin}/>
        <GoogleLogin/>
      </div>
      </div>
  )
}
