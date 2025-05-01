import React, { useReducer } from "react";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Journal from "./Journal.jsx";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import User from "./User.jsx";
import Calculator from "./Calculator.jsx";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route, useNavigate, useLocation,  } from "react-router-dom";

import { useEffect,createContext, useContext} from "react";
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
mobile:undefined,
dob:undefined,
gender:undefined,
country:undefined,
city:undefined,
isLogin:false,
isLoading:true
  }

  const [ state, dispatch]= useReducer(reducer,intialValues);

 function reducer(state,action){
switch(action.type){
case "LOGIN":
  let localUser = JSON.stringify({...state, isLogin:true , ...action.user})
  localStorage.setItem("user",localUser);
  return{...state, isLogin:true ,isLoading:false, ...action.user};
  case "UPDATEPROFILE":
    let updatedUser = JSON.stringify({...state, isLogin:true , ...action.user})
    localStorage.setItem("user",updatedUser);
    return{...state, isLogin:true , isLoading:false, ...action.user};
  case "LOGOUT":
    localStorage.clear();
    return {...state,isLogin:false, isLoading:false, name:undefined,
      email:undefined,
      password:undefined,
      contact:undefined,
      dob:undefined,
      gender:undefined,
      country:undefined,
      city:undefined, };
    default:
      return {...state};
}

 }
 
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      let localUser = JSON.parse(user);
      dispatch({ type: "LOGIN",   user: localUser } );
    } else {
      navigate("/");
    }  
  }, []);
if(state.isLoading)
{ <>  
 <p> loading.... </p>

</>  }
  return (
    <AuthContext.Provider value={{state,dispatch}} > 
    <Routes>
      {state?.isLogin?(<>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/to_do_list" element={<ToDoList />} />
      <Route path="/game" element={<Game />} />
      <Route path="/journal" element={<Journal />} />
      </>):( <>  
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      </>)}
    </Routes>
    </AuthContext.Provider>
  );
}
