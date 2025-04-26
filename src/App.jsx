import React, { useReducer,createContext } from "react";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Activity from "./Activity.jsx";
import Game from "./Game.jsx";
import Analysis from "./Analysis.jsx";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import User from "./User.jsx";
import Calculator from "./Calculator.jsx";
import ProtectedRoute from "./ProtectedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import internal from "stream";

//useState (useReducer) useEffect, useRef, useReducer, usecontext, createcontext
const AuthContext = createContext();

export {AuthContext}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  let intialValues = {
    name: undefined,
    email: undefined,
    mobile: undefined,
    isLogin: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "LOGIN":
        let localUser= JSON.stringify({ ...state, isLogin: true, ...action.user })
        localStorage.setItem("user",localUser)
        return { ...state, isLogin: true, ...action.user };
        break;
      case "LOGOUT":
        localStorage.clear()
        return { ...state, isLogin: false ,name:undefined,email:undefined,mobile:undefined};
        break;
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, intialValues);


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      let localUser = JSON.parse(user);
      dispatch({ type: "LOGIN",   user: localUser } );
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ state, dispatch }}>
        {state?.isLogin ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/game" element={<Game />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/user" element={<User />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createAccount" element={<CreateAccount />} />
          </Routes>
        )}
      </AuthContext.Provider>
    </>
  );
}
