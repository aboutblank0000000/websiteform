import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const Page = () => {
  const auth = getAuth();
  const handleLogOut = async()=>{
    signOut(auth).then(() => {
      console.log('log out succes')
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      Page
      <button onClick={()=>handleLogOut}>logout</button>
    </div>

  )
}

export default Page