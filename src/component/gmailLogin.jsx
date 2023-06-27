import React, { useState } from "react";
import { loginform } from "../formSource";
import { useNavigate } from "react-router-dom";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  getDocs,
  deleteField,
} from "firebase/firestore";
import { useAuth } from "../auth";
import { db } from "../firebaseconfig";

import "./CSS/gmailLogin.css";
const Login = ({ handleLogin }) => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const currentUser = useAuth();

  const getInputValue = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUserInfo({ ...userInfo, [id]: value });
  };
  const handleSubmit = async () => {
    handleLogin(userInfo);
    await setDoc(doc(db, "User", currentUser.currentUser.uid), {
      //create collection that have login
      ...userInfo,
      passwordconfirmation: deleteField(),
      uid: currentUser.currentUser.uid,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <>
      <div className="loginForm">
        {loginform.map((input) => (
          <>
            <div className="formInput" key={input.id}>
              <div className="Icon">{input.icon}</div>
              <input
                id={input.id}
                type="text"
                onChange={getInputValue}
                required="required"
              ></input>
              <span className="placeholder">{input.placeholder}</span>
              <span className="label">{input.label}</span>
            </div>
          </>
        ))}
      </div>
      <div className="signupLine">
        <button className="loginBtn" onClick={handleSubmit}>
          login
        </button>
        <span>Create your account</span>
        <button
          className="registerBtn"
          onFocus={() => {
            navigate("/registration/signup");
          }}
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default Login;
