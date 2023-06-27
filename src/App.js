import React from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import { AuthProvider } from "./auth";
 import {MainLogin} from "./container/Login"
 import Signup from "./component/Signup"
 import Home from "./container/Home"
import Page from "./component/Page";

function App() {
 
  return (
    <AuthProvider>
        <Routes>
          <Route path="/*" element={<Home/>} />
          <Route path="/registration" element={<MainLogin/>} />
          <Route path="/registration/signup" element={<Signup/>} />
          <Route path="/Page" element={<Page/>} />

        </Routes>
    </AuthProvider>
  );
}

export default App;