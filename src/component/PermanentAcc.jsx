import React, { useState } from 'react'
import { EmailAuthProvider } from "firebase/auth";

const PermanentAcc = () => {
const [anonymousAcc, setAnonymousAcc] = useState(false)
const handlecConvert = ()=>{
    setAnonymousAcc(true)
}
  return (
    <button>PermanentAcc</button>

  )
}

export default PermanentAcc