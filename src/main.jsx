import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Activity from './Activity.jsx';
import Game from './Game.jsx';
import Analysis from './Analysis.jsx';
import Login from './Login.jsx';
import CreateAccount from './CreateAccount.jsx';
import User from './User.jsx';
import Calculator from './Calculator.jsx';


createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
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
  </BrowserRouter>
  </StrictMode>
)
