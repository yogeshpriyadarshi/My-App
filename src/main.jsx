import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Activity from './Activity.jsx';


createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<App />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
