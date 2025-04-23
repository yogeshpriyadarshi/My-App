import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Activity from './Activity.jsx';
import Point from './Point.jsx';
import Analysis from './Analysis.jsx';
import Login from './Login.jsx';
import CreateAccount from './CreateAccount.jsx';

createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/point" element={<Point />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createAccount" element={<CreateAccount />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
