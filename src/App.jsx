import React from 'react'
import About from './About.jsx';
import Home from './Home.jsx';
import Activity from './Activity.jsx';
import Game from './Game.jsx';
import Analysis from './Analysis.jsx';
import Login from './Login.jsx';
import CreateAccount from './CreateAccount.jsx';
import User from './User.jsx';
import Calculator from './Calculator.jsx';
import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';



export default function App() {
  const navigate= useNavigate();
  const location = useLocation();
useEffect(() => {

  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    navigate('/login');
  }else{
     if(location.pathname==='/'){
      navigate('/home');
     }else{
    navigate( location.pathname);
     }
  }
}, [  location.pathname]);

  return (
    <Routes>  
      <Route path="/" element={<Login />} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/game" element={<Game/>} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/user" element={<User/>} />
      <Route path="/calculator" element={<Calculator/>} />
    </Routes>

  )
}
