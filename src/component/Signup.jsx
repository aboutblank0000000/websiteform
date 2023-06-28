import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  getDocs,
  updateDoc,
  deleteField,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  EmailAuthProvider,
  linkWithCredential,
} from "firebase/auth";
import { useAuth } from "../auth";
import { auth, db } from "../firebaseconfig";
import "./CSS/gmailSignup.css";

import { userInputs } from "../formSource";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [userInfo, setuserInfo] = useState({});
  const currentUser = useAuth();

  const getInputValue = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    setuserInfo({ ...userInfo, [id]: value });
    if (id == "password") {
      setPassword(e.target.value);
    }
    if (id == "passwordconfirmation") {
      setPasswordConfirmation(e.target.value);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (currentUser) {
      const credential = EmailAuthProvider.credential(userInfo.email, password);
      linkWithCredential(auth.currentUser, credential)
        .then(async (usercred) => {
          const user = usercred.user;
          console.log("Anonymous account successfully upgraded", user);
          navigate("/Page");
          await updateDoc(doc(db, "User", currentUser.currentUser.uid), {
            //create collection that have login
            ...userInfo,
            passwordconfirmation: deleteField(),
            signUpTimeStamp: serverTimestamp(),
          });
        })
        .catch((error) => {
          console.log("Error upgrading anonymous account", error);
        });
      console.log(credential);
    } else {
      if (password == passwordConfirmation) {
        try {
          await createUserWithEmailAndPassword(auth, userInfo.email, password);
          console.log(auth);
          console.log("succes");
          navigate("/registration");
        } catch (error) {
          console.log(error);
        }
      } else {
        alert("wrong password");
        console.log(`${password},${passwordConfirmation}}`);
      }
    }
  };
  console.log(userInfo);

  return (
    <div className="center">
      <div className="gmailSignUp">
        <span className="title">Register</span>
        <form onSubmit={handleSignUp} className="signupForm">
          <div className="loginForm">
            {userInputs.map((input) => (
              <>
                <div className="formInput" key={input.id}>
                  <div className="IconSignup">{input.icon}</div>
                  <input
                    id={input.id}
                    type={input.type}
                    onChange={getInputValue}
                    required="required"
                  ></input>
                  <span className="placeholder">{input.placeholder}</span>
                  <span className="label">{input.label}</span>
                </div>
              </>
            ))}
          </div>
          <div className="btnGroup">
            <button
              onClick={() => {
                navigate("/registration");
              }}
              className="signupBtn"
            >
              back to Login page
            </button>
            <button className="signupBtn" id="btnSignUp" onClick={handleSignUp}>
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
