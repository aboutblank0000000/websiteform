import React, {useState,useEffect,useContext,createContext} from "react";
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const authContext = createContext()

export const useAuth = ()=>{
    return useContext(authContext)
}

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        console.log(user)
        setCurrentUser(user);
        if(user){
          navigate('/Game')
        }
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
  
