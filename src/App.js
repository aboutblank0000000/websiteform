import React from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import { AuthProvider } from "./auth";
 import {MainLogin} from "./container/Login"
 import Signup from "./component/Signup"
 import Home from "./container/Home"
 import Lobby from "./component/lobby";
 import Join from "./component/join"
import AnonymousTest from "./AnonymousTest";
import Username from "./component/Username";
function App() {
 
  return (
    <AuthProvider>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/registration" element={<MainLogin/>} />
          <Route path="/registration/signup" element={<Signup/>} />

        </Routes>
    </AuthProvider>
  );
}

export default App;