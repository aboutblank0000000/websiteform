import React, {useState,useEffect,useContext,createContext} from "react";
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

const authContext = createContext()

export const useAuth = ()=>{
    return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        setCurrentUser(user);
        setLoading(false);
      });
    }, []);
    if (loading) {
      return <p>loading...</p>;
    }
  
    return (
      <authContext.Provider value={{ currentUser }}>
        {children}
      </authContext.Provider>
    );
  };
  
