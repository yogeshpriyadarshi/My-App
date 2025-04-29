import React from "react";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Analysis from "./Analysis.jsx";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import User from "./User.jsx";
import Calculator from "./Calculator.jsx";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, useNavigate, useLocation, } from "react-router-dom";

import { useEffect,createContext} from "react";
import ToDoList from "./ToDoList.jsx";
import Profile from "./Profile.jsx";

const AuthContext =createContext();
export{AuthContext}



export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  let intialValues = {
name:undefined,
email:undefined,
password:undefined,
contact:undefined,
dob:undefined,
gender:undefined,
country:undefined,
city:undefined,
  }
 function reducer(state,action){
switch(action.type){
case "LOGIN":
  return;
  case "LOGOUT":
    return;
    default:
    return;
}

 }
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    
  }, [location.pathname]);

  return (
    <AuthContext.provider> 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/to_do_list" element={<ToDoList />} />
      <Route path="/game" element={<Game />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
    </AuthContext.provider>
  );
}
