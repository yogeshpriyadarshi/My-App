import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Activity from './Activity.jsx';
import Point from './Point.jsx';
import Analysis from './Analysis.jsx';


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

    </Routes>
  </BrowserRouter>
  </StrictMode>
)
